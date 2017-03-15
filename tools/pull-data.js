
var path =require ('path') ;
var fs =require ('fs') ;
var crypto =require('crypto') ;
//var request =request ('request') ;
var request =require ('sync-request') ;
var xml =require ('xml-js') ;
var moment =require ('moment') ;
var google =require ('googleapis') ;
var youtube =google.youtube ('v3') ;

// SlideShare

var SSKey =process.env.SSKey || '' ;
var SSSecret =process.env.SSSecret || '' ;
var SSusers =[
	'Autodesk', 'CyrilleFauvel', 'AdamNagy1', 'AugustoMaiaGonalves',
	'PhilippeLeefsma', 'KevinVandecar', 'ShawnGilmour', 'StephenPreston5',
	'DenisGrigor', 'shiyaluo', 'JaimeRosalesDuque',
	'ToshiakiIsezaki', 'ZhongWu1', 'XiaodongLiang2', 'ogaryu',
	'jeremytammik', 'JeremyTammik1'
] ;
var xmlPaths ={
	'ID._text': 'id', // id
	'Title._text': 'title', // title, raw_title
	'StrippedTitle._text': 'stripped_title', // stripped_title
	'Description._text': 'description', // description
	'NumSlides._text': 'total_slides', // total_slides
	'UserID._text': 'user_id', // return_name
	'Username._text': 'user_login', // user_login
	'ThumbnailURL._text': 'thumb_url',
	'ThumbnailSize._text': null,
	'ThumbnailSmallURL._text': 'thumb_url_small',
	'ThumbnailXLargeURL._text': 'thumb_url_xlarge', // thumb_url
	'ThumbnailXXLargeURL._text': 'thumb_urlxxlarge',
	'Created._text': 'created_at', // timestamp, created_at
	'Updated._text': 'updated_at',
	'Language._text': 'language',
	'Format._text': 'format',
	'NumDownloads._text': 'download', // download
	'Download._text': null, // download
	'URL._text': 'url', // minus https://slideshare.net
	'DownloadUrl._text': 'download_url',
	'Embed._text': 'embed',
	'SlideshowEmbedUrl._text': 'embed_url',
	'SlideshowType._text': 'slideshow_type_extended', // slideshow_type_extended
	'InContest._text': null,
	'PPTLocation._text': 'ppt_location', // ppt_location
	'NumViews._text': 'view_count', // view_count
	'NumComments._text': 'comments_count',
	'NumFavorites._text': 'favorites_count', // boolean? favorited
	'PrivacyLevel._text': 'privacy_level',
	'FlagVisible._text': 'visible',
	'ShowOnSS._text': 'show_on_ss',
	'SecretKey._text': null,
	'SecretURL._text': null,
	'AllowEmbed._text': 'allow_embed',
	'ShareWithContacts._text': 'share_with_contact'

	//'Tags.Tag._text': null,
	//'RelatedSlideshows.RelatedSlideshowID._text': null
} ;

// The slideshare api is not really good, returns an XML response, not consistent in returned results,
// and the documentation does not seems to be accurate. The endpoints used below is not documented at
// all but consistent as well as returning a json response. The only issue (in both) is the number of hits,
// so we need to traverse by page and guess when we are done.

//https://www.slideshare.net/search/slideshow?searchfrom=header&q=autodesk+forge&ud=week&ft=all&lang=en&sort=
//https://www.slideshare.net/search/slideshow?searchfrom=header&q=autodesk+forge&ud=month&ft=all&lang=en&sort=
//https://www.slideshare.net/search/slideshow?searchfrom=header&q=autodesk+forge&ud=year&ft=all&lang=en&sort=
//https://www.slideshare.net/search/slideshow?searchfrom=header&q=autodesk+forge&ud=any&ft=all&lang=en&sort=

// lang=** | en | ...
// ud=week | month | year | any
// format=json

function slideshare_search (search, time, lang) {
	search ='&q=' + (search || 'autodesk+forge') ;
	lang =lang || 'en' ;
	time =time || 'any' ;

	var results ={} ;
	var data='searchfrom=header&ft=all&sort=&ud=' + time + '&lang=' + lang + '&format=json' ;
	var page='&page=' ;
	for ( var i =1 ;; i++ ) {
		var res =request ('GET', 'https://www.slideshare.net/search/slideshow?' + data + search + page + i) ;
		var json =JSON.parse (res.getBody ().toString ()) ;
		if ( json.search_results.length === 0 )
			break ;

		console.log (' Slideshare page ' + i + ': ' + json.search_results.length) ;
		for ( var j =0 ; j < json.search_results.length ; j++ ) {
			var adskForgeRe =/^.*?\bforge\b.*?\bautodesk\b.*?$/gmi ;
			var adskForgeDevconRe =/^.*?\bforge\b.*?\bdevcon\b.*?$/gmi ;
			var st =json.search_results [j].title + ' ' + json.search_results [j].description ;
			if ( adskForgeRe.test (st) || adskForgeDevconRe.test (st) ) {
				//results.push (json.search_results [j]) ;
				results [json.search_results [j].id] =json.search_results [j] ;
				console.log ('Adding slideshare #: ' + json.search_results [j].id) ;
			}
		}

		if ( json.search_results.length < 12 )
			break ;
	}
	fs.writeFile ('slideshare-' + time + '.json', JSON.stringify (results, null, '\t'), function (err) {
		if ( err )
			return (console.log (err)) ;
		console.log ('slideshare-' + time + '.json saved!') ;
	}) ;
	return (results) ;
}

function slideshare_update (search, lang) {
	slideshare_update_7days (search, lang, function (results) {
		if ( results === null ) {
			console.error ('slideshare_update_7days failed') ;
			return ;
		}
		console.log ('slideshare_update_7days completed successfully.') ;
		slideshare_update_users (function (results) {
			if ( results === null ) {
				console.error ('slideshare_update_users failed') ;
				return ;
			}
			console.log ('slideshare_update_users completed successfully.') ;
			console.log ('  Slideshare done') ;
		}) ;
	}) ;
}

function slideshare_update_7days (search, lang, callback) {
	var results =slideshare_search (search, 'week', lang) ;
	fs.readFile ('slideshare.json', function (err, text) {
		if ( err ) {
			if ( callback )
				callback (null) ;
			return (console.error (err)) ;
		}
	 	var json =JSON.parse (text) ;
		Object.keys (results).forEach (function (key) {
			if ( json.hasOwnProperty (key) )
				return ;
			json [key] =results [key] ;
			console.log ('Adding slideshare #: ' + key) ;
		}) ;

		Object.keys (json).forEach (function (key) {
			json [key] =getSlideshareInfo (key) ;
		}) ;

		fs.writeFile ('slideshare.json', JSON.stringify (json, null, '\t'), function (err) {
			if ( err ) {
				if ( callback )
					callback (null) ;
				return (console.error (err)) ;
			}
			console.log ('slideshare.json saved!') ;
			if ( callback )
				callback (json) ;
		}) ;
	}) ;
}

function slideshare_update_users (callback) {
	fs.readFile ('slideshare.json', function (err, text) {
		if ( err ) {
			if ( callback )
				callback (null) ;
			return (console.error (err)) ;
		}
		var json =JSON.parse (text) ;
		for ( var i =0 ; i < SSusers.length ; i++ ) {
			var results =getSlidesharesPerUser (SSusers [i]) ;
			Object.keys (results).forEach (function (key) {
				if ( !json.hasOwnProperty (key) )
					console.log ('Adding slideshare #: ' + key) ;
				json [key] =results [key] ;
			}) ;
		}

		fs.writeFile ('slideshare.json', JSON.stringify (json, null, '\t'), function (err) {
			if ( err ) {
				if ( callback )
					callback (null) ;
				return (console.error (err)) ;
			}
			console.log ('slideshare.json saved!') ;
			if ( callback )
				callback (json) ;
		}) ;
	}) ;
}

function getValue (index, xml) {
	var value =null ;
	for ( var i =0 ; i < index.length ; i++ )
		value =(value || xml) [index [i]] ;
	return (value) ;
}

function parseSlideshow (ss) {
	var result ={} ;
	Object.keys (xmlPaths).forEach (function (key) {
		if ( xmlPaths [key] === null )
			return ;
		var ids =key.split ('.') ;
		ids.unshift ('Slideshow') ;
		var value =getValue (ids, ss) ;
		result [xmlPaths [key]] =value ;
	}) ;
	// Tags
	result.tags =[] ;
	var arr =ss ['Slideshow'] ['Tags'] ['Tag'] ;
	for ( var i =0 ; arr && i < arr.length ; i++ )
			result.tags.push (arr [i]._text) ;
	// Links
	result.related =[] ;
	arr =ss ['Slideshow'] ['RelatedSlideshows'] ['RelatedSlideshowID'] ;
	for ( var i =0 ; arr && i < arr.length ; i++ )
		result.related.push (arr [i]._text) ;
	return (result) ;
}

function getSlideshareInfo (id) {
	var ts =Math.floor (Date.now () / 1000) ;
	var shasum =crypto.createHash ('sha1') ;
	shasum.update (SSSecret + ts) ;
	var hash =shasum.digest ('hex') ;
	var data ='api_key=' + SSKey + '&ts=' + ts + '&hash=' + hash + '&detailed=1&format=json' ;

	var res =request ('GET', 'https://www.slideshare.net/api/2/get_slideshow?' + data + '&slideshow_id=' + id) ;
	//console.log (res.getBody ().toString ()) ;
	//var result1 =xml.xml2json (res.getBody ().toString (), { compact: true, spaces: 4 }) ;
	var xjson =xml.xml2js (res.getBody ().toString (), { compact: true, ignoreText: false, alwaysChildren: true }) ;
	var result =parseSlideshow (xjson) ;
	//console.log (JSON.stringify (result, null, 4)) ;
	return (result) ;
}

function getSlidesharesPerUser (username) {
	username =username || 'Autodesk' ;
	console.log ('Processing ' + username) ;

	var ts =Math.floor (Date.now () / 1000) ;
	var shasum =crypto.createHash ('sha1') ;
	shasum.update (SSSecret + ts) ;
	var hash =shasum.digest ('hex') ;
	var data ='api_key=' + SSKey + '&ts=' + ts + '&hash=' + hash + '&detailed=1&format=json' ;

	var res =request ('GET', 'https://www.slideshare.net/api/2/get_slideshows_by_user?' + data + '&username_for=' + username) ;
	//console.log (res.getBody ().toString ()) ;
	var xjson =xml.xml2js (res.getBody ().toString (), { compact: true, ignoreText: false, alwaysChildren: true }) ;
	//console.log (xjson) ;
	var results ={} ;
	if ( !xjson.User.Slideshow )
		xjson.User.Slideshow =[] ;
	else if ( !xjson.User.Slideshow.length )
		xjson.User.Slideshow =[ xjson.User.Slideshow ] ;
	for ( var i =0 ; i < xjson.User.Slideshow.length ; i++ ) {
		var result =parseSlideshow ({ 'Slideshow': xjson.User.Slideshow [i] }) ;
		//console.log ('- ' + i) ;
		var adskForgeRe =/^.*?\bforge\b.*?\bautodesk\b.*?$/gmi ;
		var adskForgeDevconRe =/^.*?\bforge\b.*?\bdevcon\b.*?$/gmi ;
		var st =result.title + ' ' + result.description ;
		if ( adskForgeDevconRe.test (result.title) || adskForgeRe.test (st) )
			results [result.id] =result ;
		//console.log (JSON.stringify (result, null, 4)) ;
	}
	//console.log (JSON.stringify (result, null, 4)) ;
	fs.writeFile ('slideshare-' + username + '.json', JSON.stringify (results, null, '\t'), function (err) {
		if ( err )
			return (console.log (err)) ;
		console.log ('slideshare-' + username + '.json saved!') ;
	}) ;
	return (results) ;
}


// Github

var GithubOrgs =[ 'Autodesk-Forge' ] ;
var GithubUsers =[ 'cyrillef', 'adamenagy', 'augustogoncalves', 'leefsmp' ] ;

// https://api.github.com/orgs/Autodesk-Forge/repos?type=public
// https://api.github.com/users/cyrillef/repos?type=public
// https://api.github.com/repos/cyrillef/extract.autodesk.io/contents/package.json?ref=master

var githubToken =process.env.GITHUB_TOKEN || '' ;

function github (id, szType, org) {
	id =id || 'Autodesk-Forge' ;
	org =org || 'orgs' ; // users
	szType =szType || 'public' ; // all, public, private, forks, sources, member

	var results =[] ;
	var data='type=' + szType ;
	var page='&page=' ;
	for ( var i =1 ;; i++ ) {
		var res =request (
			'GET',
			'https://api.github.com/' + org + '/' + id + '/repos?' + data + page + i,
			{ 'headers': { 'User-Agent': 'node.js', 'Authorization': 'Basic ' + githubToken } }
		) ;
		var json =JSON.parse (res.getBody ().toString ()) ;
		if ( json.length === 0 )
			break ;

		console.log ('Github page ' + i + ': ' + json.length) ;
		results =results.concat (json) ;
	}
	fs.writeFile (id + '.github.json', JSON.stringify (results, null, '\t'), function (err) {
		if ( err )
			return (console.log (err)) ;
		console.log (id + '.github.json saved!') ;
	}) ;
	return (results) ;
}

function github_users () {
	var externals =[] ;
	GithubUsers.forEach (function (key) {
		console.log ('Pulling Github data for ' + key) ;
		results =github (key, 'public', 'users') ;
		results.forEach (function (repo) {
			var url =repo.contents_url.replace ('{+path}', 'autodesk-forge.json') ;
			var res =request ('GET', url, { 'headers': { 'User-Agent': 'node.js', 'Authorization': 'Basic ' + githubToken } }) ;
			if ( res.statusCode === 404 )
				return ;
			//var json =JSON.parse (res.getBody ().toString ()) ;
			//var st =Buffer.from (json.content, 'base64').toString ('utf8') ;
			//var desc =JSON.parse (st) ;

			externals.push (repo) ;
		}) ;
	}) ;
	fs.writeFile ('externals.github.json', JSON.stringify (externals, null, '\t'), function (err) {
		if ( err )
			return (console.log (err)) ;
		console.log ('externals.github.json saved!') ;
	}) ;
}


// YouTube

var youtubeApiKey =process.env.YOUTUBE_APIKEY || '' ;
var youtubeAppID =process.env.YOUTUBE_APPID || '' ;

// https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=autodesk+forge&maxResults=25&key={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/videospart=statistics&id={id.videoId}%2C+{id.videoId}&key={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/search?part=snippet&q=‌​%23%23{YOUR_TAG}&key‌​={YOUR_API_KEY}
// https://www.googleapis.com/youtube/v3/videos?key={API-key}&fields=items(snippet(title,description,tags))&part=snippet&id={video_id}

// https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBPy9T67dnOi_8VD-R_W5QK5DND1Z7yTLA&fields=items(snippet(title,description,tags))&part=snippet&id=3_zwerE90eo

// https://developers.google.com/youtube/v3/docs/search/list
function youtube_search (search, time, bSilent) {
	search =search || 'autodesk+forge' ;
	time =time || '' ; // '' for any, year, month, week or RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
	var bVerbose =(bSilent === true || bSilent === undefined ? false : true) ;
	var publishedAfter ='' ;
	switch ( time ) {
		case 'week':
			publishedAfter =moment ().subtract (1, 'week').format ('YYYY-MM-DDTHH:mm:ss') + 'Z' ;
			break ;
		case 'month':
			publishedAfter =moment ().subtract (1, 'month').format ('YYYY-MM-DDTHH:mm:ss') + 'Z' ;
			break ;
		case 'year':
			publishedAfter =moment ().subtract (1, 'year').format ('YYYY-MM-DDTHH:mm:ss') + 'Z' ;
			break ;
		case 'any':
			publishedAfter ='' ;
			break ;
		default:
			publishedAfter =time ;
			time =time.replace (/[\:\+]/g, '') ;
			break ;
	}
	if ( publishedAfter != '' )
		publishedAfter ='&publishedAfter=' + encodeURI (publishedAfter).replace ('+', '%2B') ;

	var results ={
		channel: {},
		playlist: {},
		video: {}
	} ;

	var nextPageToken ='' ;
	var part ='part=id%2Csnippet&q=' + search + '&maxResults=25' ;
	var key ='&key=' + youtubeApiKey ;
	for ( var i =1 ;; i++ ) {
		var res =request ('GET', 'https://www.googleapis.com/youtube/v3/search?' + part + key + nextPageToken + publishedAfter) ;
		if ( res.statusCode != 200 )
			break ;
		var json =JSON.parse (res.getBody ().toString ()) ;
		if ( json.items.length === 0 )
			break ;
		nextPageToken ='&pageToken=' + json.nextPageToken ;
		for ( var j =0 ; j < json.items.length ; j++ ) {
			var item =json.items [j] ;
			var id =item.id ;
			var snippet =item.snippet ;
			//console.log (json.items [j].id.kind + ' - '+ json.items [j].snippet.title) ;
			if ( id.kind === 'youtube#video' ) {
				var adskForgeRe =/^.*?\bforge\b.*?\bautodesk\b.*?$/gmi ;
				var adskForgeDevconRe =/^.*?\bforge\b.*?\bdevcon\b.*?$/gmi ;
				snippet.id =id.videoId ;
				snippet.tags =getYouTubeTags (snippet.id) ;
				var st =snippet.title + ' ' + snippet.description ;
				if ( snippet.tags !== null )
					st +=' ' + snippet.tags.join (' ') ;
				if ( adskForgeRe.test (st) || adskForgeDevconRe.test (st) ) {
					snippet.statistics =getYouTubeStats (snippet.id) ;
					results.video [id.videoId] =snippet ;
					if ( bVerbose )
						console.log ('Adding ' + id.kind + ' #: ' + snippet.id + ' - ' + snippet.title) ;
				}
			} else if ( id.kind === 'youtube#playlist' ) {
				snippet.id =id.playlistId ;
				snippet.status ='detected' ;
				results.playlist [id.playlistId] =snippet ;
				if ( bVerbose )
					console.log ('Adding ' + id.kind + ' #: ' + snippet.id + ' - ' + snippet.title) ;
			} else if ( id.kind === 'youtube#channel' ) {
				snippet.id =id.channelId ;
				snippet.status ='detected' ;
				results.channel [id.channelId] =snippet ;
				if ( bVerbose )
					console.log ('Adding ' + id.kind + ' #: ' + snippet.id + ' - ' + snippet.title) ;
			}
		}
		if ( !bVerbose )
			process.stdout.write ('.') ;
	}
	//console.log (JSON.stringify (results, null, '\t')) ;
	fs.writeFile ('youtube' + time + '.json', JSON.stringify (results, null, '\t'), function (err) {
		if ( err )
			return (console.log (err)) ;
		console.log ('youtube' + time + '.json saved!') ;
	}) ;
	return (results) ;

	// var requests = youtube.search.list (/*'id,snippet', */{part: 'id,snippet', q: 'autodesk+forge', maxResults: 25, key: youtubeApiKey},
	// 	function (err, data) {
	// 	 	if ( err ) {
	// 	 		console.error('Error: ' + err) ;
	// 	 	}
	// 	 	if ( data ) {
	// 	 		console.log (util.inspect(data, false, null)) ;
	// 	 	}
	// 	}
	// ) ;
}

function youtube_update (search, callback) {
	var results =youtube_search (search, 'week') ;
	//var results =youtube_search (search, '2015-01-01T00:00:00Z', true) ;
	console.log ('...') ;
	fs.readFile ('youtube.json', function (err, text) {
		if ( err ) {
			if ( callback )
				callback (null) ;
			return (console.error (err)) ;
		}
		var json =JSON.parse (text) ;

		Object.keys (results.channel).forEach (function (key) {
			if ( json.channel.hasOwnProperty (key) )
				return ;
			json.channel [key] =results.channel [key] ;
			console.log ('Adding channel #: ' + key) ;
		}) ;
		Object.keys (results.playlist).forEach (function (key) {
			if ( json.playlist.hasOwnProperty (key) )
				return ;
			json.playlist [key] =results.playlist [key] ;
			console.log ('Adding playlist #: ' + key) ;
		}) ;
		Object.keys (results.video).forEach (function (key) {
			if ( json.video.hasOwnProperty (key) )
				return ;
			json.video [key] =results.video [key] ;
			console.log ('Adding video #: ' + key) ;
		}) ;

		Object.keys (json.video).forEach (function (key) {
			if ( json.video [key].hasOwnProperty ('ignore') )
				return ;
			json.video [key].statistics =getYouTubeStats (key) ;
		}) ;

		fs.writeFile ('youtube.json', JSON.stringify (json, null, '\t'), function (err) {
			if ( err ) {
				if ( callback )
					callback (null) ;
				return (console.error (err)) ;
			}
			console.log ('youtube.json saved!') ;
			if ( callback )
				callback (json) ;
		}) ;
	}) ;
}

function getYouTubeStats (id) {
	var key ='&key=' + youtubeApiKey ;
	var data ='part=statistics' ;
	var res =request ('GET', 'https://www.googleapis.com/youtube/v3/videos?' + data + '&id=' + id + key) ;
	if ( res.statusCode != 200 )
		return (null) ;
	var stats =JSON.parse (res.getBody ().toString ()) ;
	if ( stats.items.length == 0 )
		return (null) ;
	return (stats.items [0].statistics) ;
}

function getYouTubeTags (id) {
	var key ='&key=' + youtubeApiKey ;
	var data ='fields=items(snippet(tags))&part=snippet' ;
	var res =request ('GET', 'https://www.googleapis.com/youtube/v3/videos?' + data + '&id=' + id + key) ;
	if ( res.statusCode != 200 )
		return (null) ;
	var stats =JSON.parse (res.getBody ().toString ()) ;
	if ( stats.items.length == 0 )
		return (null) ;
	return (stats.items [0].snippet.tags) ;
}

// Run
var results =null ;
//slideshare ('autodesk+forge', 'any') ; // 9:23 -> 10:08 (45') / 417 pages (03/08/2017)
//results =github () ;
//results =slideshare_update_7days ('autodesk+forge') ;
//results =getSlideshareInfo ('72540711') ;
//getSlidesharesPerUser ('Autodesk') ; // User -> Count and User -> Slideshow
//console.log (results) ;

console.log ('Pulling YouTube data...') ;
//youtube_search ('autodesk+forge') ;
youtube_update ('autodesk+forge') ;
console.log ('  YouTube done') ;
return;

console.log ('Pulling Github data...') ;
results =github () ;
github_users () ;
console.log ('  Github done') ;

console.log ('Pulling Slideshare data...') ;
//slideshare_search () ;
slideshare_update ('autodesk+forge') ;
