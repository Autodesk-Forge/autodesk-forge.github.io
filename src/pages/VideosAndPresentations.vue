<template>
	<main-layout>

    	<section class="style5">
            <div class="inner">
                <header class="major">
                    <h2>Presentation library & Videos</h2>
                </header>
                <p>Welcome to our library of videos and presentations helping you to understand how our switching
                   solutions can help you.</p>

                <ul class="actions">
                    <li><a href="#forge-youtube" class="button next scrolly">Checkout our videos</a></li>
                </ul>

                <ul class="actions">
                    <li><a href="#forge-slideshare" class="button next scrolly">Checkout our presentations</a></li>
                </ul>
            </div>
        </section>

	<div id="cards">
        <div class="forge-top-filter">
            <span class="card-count"><strong>{{ videos.length }}</strong> videos</span>
			<youtubefilter id="youtubefilter"></youtubefilter>
            <div style="clear: both;"></div>
        </div>
    </div>

    <div class="maxwidth">
		<a v-for="video in videos" v-bind:href="video.watchUrl">
			<div class="card-card forge-title">
				<div>
					<h3 class="card-title" v-bind:title="video.title">{{ video.title }}</h3>
					<img class="card-thumbnail" v-bind:src="video.thumbnails.medium.url" v-bind:title="video.description" />
					<!-- p class="card-info">{{ video.description }}</p -->
				</div>
				<div class="card-footer">
					<p>
                        <span class="card-card-info-item" title="Favorites"><i class="fa fa-star" aria-hidden="true"></i> {{ video.statistics.favoriteCount }}</span>
                        <span class="card-card-info-item" title="Views"><i class="fa fa-eye" aria-hidden="true"></i> {{ video.statistics.viewCount }}</span>
                        <span class="card-card-info-item" title="Likes"><i class="fa fa-heart" aria-hidden="true"></i> {{ video.statistics.likeCount }}</span>
                        <span class="card-card-info-item" title="Comments"><i class="fa fa-comments" aria-hidden="true"></i> {{ video.statistics.commentCount }}</span>
                    </p>
				</div>
			</div>
		</a>
    </div>
    <div style="clear: both;"></div>

	<div id="cards">
        <div class="forge-top-filter">
            <span class="card-count"><strong>{{ prez.length }}</strong> presentations</span>
			<prezfilter id="prezfilter"></prezfilter>
            <div style="clear: both;"></div>
        </div>
    </div>

    <div class="maxwidth">
		<a v-for="pr in prez" v-bind:href="pr.watchUrl"> <!-- embed_url -->
			<div class="card-card forge-title">
				<div>
					<h3 class="card-title" v-bind:title="pr.title">{{ pr.title }}</h3>
					<img class="card-thumbnail" v-bind:src="pr.thumb_url_xlarge" v-bind:title="pr.description" />
					<!-- p class="card-info">{{ pr.description }}</p -->
				</div>
				<div class="card-footer">
					<p>
                        <span class="card-card-info-item" title="Favorites"><i class="fa fa-star" aria-hidden="true"></i> {{ pr.favorites_count }}</span>
                        <span class="card-card-info-item" title="Views"><i class="fa fa-eye" aria-hidden="true"></i> {{ pr.view_count }}</span>
                        <span class="card-card-info-item" title="Comments"><i class="fa fa-comments" aria-hidden="true"></i> {{ pr.comments_count }}</span>
                    </p>
				</div>
			</div>
		</a>
    </div>
    <div style="clear: both;"></div>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue' ;
	import youtubefilter from '../components/filters/youtubefilter.vue' ;
	import prezfilter from '../components/filters/prezfilter.vue' ;

	export default {
		name: 'video-presentation',

		created: function () {
			this.fetchData () ;
		},

		data: function () {
			var navigationMenu =require ('../data/navigation') ;
            for ( var i =0 ; i < navigationMenu.length ; i++ ) {
                if ( navigationMenu [i].image )
                    navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
            }

            let sort =[ 'Last Posted', 'Most Popular', 'Most Views', 'Most Favorites', 'Alphabetical', 'Backwards ABC' ] ;

			return ({
				title: 'Presentation library & Videos',
				description: `Welcome to our library of videos and presentations helping you to understand how our
							  switching solutions can help you.`,
				menu: navigationMenu,

				channels: {},
				filterChannel: 'All Videos',
				videos: [],
                allVideos: [],

				authors: {},
				filterAuthor: 'All Prez',
                prez: [],
                allPrez: [],

                sorted: sort,
                sortValue: 'Last Posted'
			}) ;
		},
		components: {
			MainLayout, youtubefilter, prezfilter
		},
		methods: {

            fetchData: function () {
                var self =this ;
                this.$root.$http.get (window.location.pathname + 'src/data/youtube.json') // eslint-disable-line no-undef
                    .then (function (response) {
                        //console.log (response) ;
                        self.prepareVideoData (response.body) ;
                    }) ;
                this.$root.$http.get (window.location.pathname + 'src/data/slideshare.json') // eslint-disable-line no-undef
                    .then (function (response) {
                        //console.log (response) ;
                        self.preparePrezData (response.body) ;
                    }) ;
            },

            prepareVideoData: function (videos) {
                let channels ={} ;
                for ( let key of Object.keys (videos.channel) ) {
                    let channel =videos.channel [key];
                    if ( channel.hasOwnProperty ('ignore') )
                        continue ;
                    channels [key] =channel.title ;
                }
                channels ['All Videos'] ='All Videos' ;

				let videos_ =[] ;
                for ( let key of Object.keys (videos.video) ) {
                    let video =videos.video [key] ;
                    if ( video.hasOwnProperty ('ignore') )
                        continue ;
                    video.watchUrl ='https://www.youtube.com/watch?v=' + video.id ;
                    videos_.push (video) ;
                }
                videos_.sort ((a, b) => {
                    return (b.publishedAt.localeCompare (a.publishedAt)) ;
                }) ;

                this.$data.channels =channels ;
                this.$data.videos =videos_ ;
                this.$data.allVideos =JSON.parse (JSON.stringify (videos_)) ;

                this.$children [0].$children [4].$data.channels =channels ;
                this.$children [0].$children [4].$data.videos =JSON.parse (JSON.stringify (videos_)) ;
            },

            preparePrezData: function (prezs) {
				let authors ={} ;
				let prez_ =[] ;
                for ( let key of Object.keys (prezs) ) {
                    let prez =prezs [key];
                    if ( prez.hasOwnProperty ('ignore') )
                        continue ;
                    authors [prez.user_id] =prez.user_login ;
                    prez.watchUrl ='https://www.slideshare.net/' + prez.user_login + '/' + prez.stripped_title ;
                    prez_.push (prez) ;
                }
                authors ['All Prez'] ='All Prez' ;
                prez_.sort ((a, b) => {
                    return (b.created_at.localeCompare (a.created_at)) ;
                }) ;

                this.$data.authors =authors ;
                this.$data.prez =prez_ ;
                this.$data.allPrez =JSON.parse (JSON.stringify (prez_)) ;

                this.$children [0].$children [5].$data.authors =authors ;
                this.$children [0].$children [5].$data.prez =JSON.parse (JSON.stringify (prez_)) ;
            }

        }
	}
</script>

<style>
#banner.VideosAndPresentations {
    background-image: url(./WhatIsForge/WhatIsForge2.jpg);
}
</style>

<style scoped>
* {
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
}

.maxwidth a {
	border: none;
}

.forge-top-filter {
    color: #fff;
    background-color: #f1ae3e;
    padding: 13px 30px;
    text-align: left;
    height: 1.5em;
}

.card-card {
	color: #666666;
	background: #fff;
	border: 1px solid #EBEFF0;
	border-radius: 1px;
	display: inline-block;
	/*display: block;
	float: left;*/
	position: relative;
	box-shadow: 5px 6px 2px rgba(146, 147, 204, 0.96);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	vertical-align: top;
	text-align: left;
	padding-left: 1rem;
	padding-right: 1rem;
	margin: .5rem;
	/*height: 14rem;*/
	/*height: calc((33vw - 3rem) / 1.77);*/
	padding-bottom: 5%;
	width: calc(33% - 3rem);
}

.card-count {
	float: left;
}

.card-title {
	color: #3566cc;
	margin: 4px 0 6px 0;
    display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-height: 0.8em;
	height: 1.6em;
	overflow: hidden;
	font-size: 13px;
}

.card-thumbnail {
	width: 100%;
	height: calc((33vw - 3rem) / 1.77);
}

.card-card p {
	margin: 0 auto;
}

.card-footer {
	width: 100%;
	padding: none;
	position: absolute;
	bottom: 10px;
}

.card-card-info-item {
	padding-right: 10px;
	color: #8b8b8b;
}

.card-card-footer {
	color: #EE8822 !important;
}

.card-card:hover {
	box-shadow: 0px 0px 10px 0px #cacaca;
	border: 1px solid #3566CC;
}

@media screen and (min-width: 1281px) {

    .card-card {
        width: calc(25% - 4rem);
        max-width: 345px;
        padding-bottom: 2.5%;
    }

    .card-thumbnail {
        height: calc((25vw - 4rem) / 1.77);
	}

}

@media screen and (max-width: 1280px) {

    .card-card {
        /*width: 345px;*/
        padding-bottom: 4%;
    }

    .card-thumbnail {
    }

}

@media screen and (max-width: 980px) {

    .card-card {
        width: calc(50% - 4rem) !important;
        padding-bottom: 5%;
    }

    .card-thumbnail {
        height: calc((50vw - 4rem) / 1.77);
	}

}

@media screen and (max-width: 736px) {

    .card-card {
        padding-bottom: 7%;
    }

}

@media screen and (max-width: 480px) {

    .card-card {
        width: calc(100% - 3rem) !important;
        padding-bottom: 9%;
    }

    .card-thumbnail {
        height: calc((100vw - 3rem) / 1.77);
	}

}
</style>
