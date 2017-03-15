<template>
	<div class="maxwidth forge-navbar">
		<!--pre>{{ $data | json }}</pre-->
		<a name="forge-youtube" id="forge-youtube" />

		<ul>
			<li><a href="javascript:void(0)" @click="switchFilterSearch(this)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
			<li class="searchHidden">
				<input type="search"
					v-model="searchText"
					@keyup="search(searchText)"
					@search="search(searchText)"
					placeholder="Search videos" />
					<!-- @keyup.enter="searchYoutube()" -->
			</li>
			<li class="dropdown">Channel:&nbsp;
				<a href="javascript:void(0)" class="dropdown-title no-click">{{ filterChannel }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content">
					<a v-for="channel in sortValues (channels, 'All Videos')" href="javascript:void(0)" v-on:click="filterChannel = channel" @click="filter(filterChannel)">{{ channel }}</a>
				</div>
			</li>
			<li class="dropdown">Sort: &nbsp;
                <a href="javascript:void(0)" class="dropdown-title no-click">{{ sortValue }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <div class="dropdown-content">
                    <a v-for="sorttype in sorted" href="javascript:void(0)" v-on:click="sortValue = sorttype" @click="sortBy(sorttype)">{{ sorttype }}</a>
                </div>
            </li>
		</ul>
	</div>

</template>

<script>
	//import JsSearch from 'js-search' ;

	export default {
		data: function () {
			var info =this.$root.$children [0].$data ;
			info =JSON.parse (JSON.stringify (info)) ;
			return ({
				channels: info.channels,
				filterChannel: info.filterChannel,

				videos: info.videos,

                sorted: info.sorted,
                sortValue: info.sortValue,

				searchText: ''
			}) ;
		},
		methods: {

			sortValues: function (obj, first) {
                let list =Object.values (obj).sort () ;
                if ( first !== undefined ) {
                    let index =list.indexOf (first) ;
                    list.splice (index, 1) ;
                    list.unshift (first) ;
                }
                return (list) ;
            },

			sortBy: function (value) {
				var info =this.$root.$children [0].$data ;
				var videos =info.videos ;
				var allVideos =info.allVideos ;
				switch ( value ) {
					case 'Most Popular': {
						videos.sort ((a, b) => {
							return (b.statistics.likeCount - a.statistics.likeCount) ;
						}) ;
						allVideos.sort ((a, b) => {
							return (b.statistics.likeCount - a.statistics.likeCount) ;
						}) ;
						break ;
					}
					case 'Most Views': {
                        videos.sort ((a, b) => {
                            return (b.statistics.viewCount - a.statistics.viewCount) ;
                        }) ;
                        allVideos.sort ((a, b) => {
                            return (b.statistics.viewCount - a.statistics.viewCount) ;
                        }) ;
                        break ;
                    }
                    case 'Most Favorites': {
                        videos.sort ((a, b) => {
                            return (b.statistics.favoriteCount - a.statistics.favoriteCount) ;
                        }) ;
                        allVideos.sort ((a, b) => {
                            return (b.statistics.favoriteCount - a.statistics.favoriteCount) ;
                        }) ;
                        break ;
                    }
					case 'Last Posted': {
						videos.sort ((a,b) => {
							return (b.publishedAt.localeCompare (a.publishedAt)) ;
						}) ;
						allVideos.sort ((a,b) => {
							return (b.publishedAt.localeCompare (a.publishedAt)) ;
						}) ;
						break ;
					}
					case 'Alphabetical': {
						videos.sort ((a, b) => {
							return (a.title.localeCompare (b.title)) ;
						}) ;
						allVideos.sort ((a, b) => {
							return (a.title.localeCompare (b.title)) ;
						}) ;
						break ;
					}
					case 'Backwards ABC': {
						videos.sort ((a, b) => {
							return (b.title.localeCompare (a.title)) ;
						}) ;
						allVideos.sort ((a, b) => {
							return (b.title.localeCompare (a.title)) ;
						}) ;
						break ;
					}
					default:
						break ;
				}
			},

			filter: function (channel) {
				let info =this.$root.$children [0].$data ;
				let videos =info.videos ;
                videos.splice (0, videos.length) ;
                if ( channel === 'All Videos' ) {
					videos.push (...info.allVideos) ;
					return ;
				}
				let filter =Object.keys (info.channels).filter (function (key) {
					return (info.channels [key] === channel) ;
				}) ;
				let channelId =filter [0] ;

				let results =[] ;
                for ( let video in info.allVideos ) {
                    if ( info.allVideos [video].channelId == channelId )
                        videos.push (info.allVideos [video]) ;
                }

                videos.push (...results) ;
				//this.sortBy (this.sortValue) ;
			},

			search: function (searchText) {
				var JsSearch =require ('js-search') ;

				var info =this.$root.$children [0].$data ;
				var videos =info.videos ;

				let videoSearch =new JsSearch.Search ('id') ;
				videoSearch.addIndex ('title') ;
				videoSearch.addIndex ('description') ;
				videoSearch.addDocuments (info.allVideos) ;

				videos.splice (0, videos.length) ;
				videos.push (...info.allVideos) ;
				if ( searchText ) {
					let results =[] ;
					results =videoSearch.search (searchText) ;
					videos.splice (0, videos.length) ;
					videos.push (...results) ;
				}
				this.sortBy (this.sortValue) ;
			},

			switchFilterSearch: function (evt) {
				//evt =evt.fn.arguments [0] ;
				evt =evt.event ;
				$("div#youtubefilter li.dropdown").toggle () ;
				var childs =$(evt.target).parents ('ul').children () ;
				$(evt.target).toggleClass ('fa-search-minus') ;
				$(evt.target).toggleClass ('fa-search') ;
				//$(childs [1]).toggle () ;
				$(childs [1]).toggleClass ('searchVisible') ;
			}

		}
	}
</script>

<style scoped>
ul {
	height: 0px;
}

ul li {
	display: inline-block;
}

li {
	list-style: none;
	padding-right: 20px;
}

li.right {
	float: right;
}

.no-click:active {
	pointer-events: none;
	cursor: default;
}

li.dropdown a, li a {
	border: 0;
}

.dropdown-content {
	display: none;
	position: absolute;
	background-color: white;
	min-width: 240px;
	box-shadow: 1px 1px 4px 0 #666;
	z-index: 100;
	border-radius: 5px;
}

.dropdown-content a {
	color: black;
	padding: 5px 20px 5px 20px;
	text-decoration: none;
	display: block;
}

.dropdown:hover .dropdown-content {
	display: block;
}

.dropdown-title {
	margin-bottom: 10px;
	color: white;
	font-size: 14px;
}

.forge-navbar {
	list-style: none;
	margin: 0 auto;
	/*padding-top: 5px;*/
	/*min-height: 54px;*/
	color: black;
	text-transform: none;
	float: right;
}

.api-dropdown {
	min-width: 400px;
}

.api-dropdown-col {
	float: left;
	width: 50%;
	padding-bottom: 12px;
}

.api-dropdown-header {
	color: #999;
	font-size: 12px;
	margin: 20px 0 0 20px;
	text-transform: uppercase;
}

div.forge-navbar input[type=search] {
	all: initial;
	* {
		all: unset;
	}
	color: white;
	border: solid 1px white;
	padding: 2px;
}

li.searchHidden {
	display: none;
}

li.searchVisible {
	display: inline-block;
}

@media (max-width: 740px) {
	ul li {
		display: block;
	}

	li.right {
		float: none;
	}

	.forge-navbar {
		display: none;
	}

	/*div.forge-navbar input[type=search] {
		display: block;
	}*/
}
</style>
