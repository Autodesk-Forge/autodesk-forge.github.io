<template>
	<main-layout>

	<section class="style5">
        <div class="inner">
            <header class="major">
                <h2>Forge Samples and SDKs</h2>
            </header>
            <p>Check out these samples, tutorials, and SDKs created to help speed up your Forge application development.
                               Visit our <a href="http://adndevblog.typepad.com/cloud_and_mobile/" target="_blank">blog</a> for more code snippets,
                               tips, and tricks.</p>
        </div>
    </section>

	<div id="cards">
        <div class="forge-top-filter">
            <span class="repo-count"><strong>{{ repos.length }}</strong> samples</span>
            <apifilter id="apifilter"></apifilter>
            <div style="clear: both;"></div>
        </div>
    </div>
    <div class="maxwidth">
		<a v-for="repo in repos" v-bind:href="repo.html_url">
			<div class="repo-card forge-title">
				<div>
					<h3 class="card-title" v-bind:title="repo.name">{{ repo.name }}</h3>
					<p>
						<span class="repo-card-info-item"><i class="fa fa-star" aria-hidden="true"></i> {{ repo.stargazers_count }}</span>
						<span class="repo-card-info-item"><i class="fa fa-code-fork" aria-hidden="true"></i> {{ repo.forks_count }}</span>
						<span class="repo-card-info-item"><i class="fa fa-code" aria-hidden="true"></i> {{ repo.language }}</span>
					</p>
					<p class="card-info" v-bind:title="repo.description">{{ repo.description }}</p>
				</div>
				<div class="card-footer">
					<a v-show="repo.homepage" v-bind:href="repo.homepage" target="_blank" class="repo-card-footer">
						<i class="fa fa-desktop" aria-hidden="true"></i> Live Demo
					</a>
				</div>
			</div>
		</a>
    </div>
    <div style="clear: both;"></div>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue' ;
	import apifilter from '../components/filters/apifilter.vue' ;
	//import repos from '../data/autodesk-forge-repos.json' ;
	//import repos from '../data/autodesk-forge-repos.json' ;

	export default {
		name: 'samples-vue',

		created: function () {
			this.fetchData () ;
		},

		data: function () {
			var navigationMenu =require ('../data/navigation') ;
            for ( var i =0 ; i < navigationMenu.length ; i++ ) {
                if ( navigationMenu [i].image )
                    navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
            }

			let apis =[ 'All APIs', 'Viewer', 'Design Automation', 'Model Derivative', 'Data Management' ] ;
            let sort =[ 'Most Popular', 'Last Updated', 'Alphabetical', 'Backwards ABC' ] ;
			return ({
				title: 'Samples & Live Demos',
				description: `Check out these samples, tutorials, and SDKs created to help speed up your Forge
							  application development. Visit our blog for more code snippets, tips, and tricks.`,
				menu: navigationMenu,
				repos: [],
				allRepos: [],
				apis: apis, // used in filter by api used
				filterAPI: 'All APIs',
				languages: [], // used in filter by language
				filterLanguage: 'All Languages',
				sort: sort,
				sortValue: 'Last Updated'
			}) ;
		},
		components: {
			MainLayout, apifilter
		},
		methods: {

			fetchData: function () {
				var self =this ;
				this.$root.$http.get (window.location.pathname + 'src/data/autodesk-forge-repos.json') // eslint-disable-line no-undef
                    .then (function (response) {
                        //console.log (response) ;
                        var repos =response.data ;
                        self.prepareData (repos) ;
                    }) ;
                    //.catch (function (error) {
                    //    console.error (error) ;
                    //}) ;
			},

			prepareData: function (repos) {
				let languages =[ 'All Languages' ] ;
				let repos_ =repos ;
				for ( let repo of repos ) {
					// get list of languages
					let language =repo.language ;
					if ( !!language && languages.indexOf (language) === -1 )
						languages.push (language) ;
				}

				this.$data.repos =repos_ ;
				this.$data.allRepos =JSON.parse (JSON.stringify (repos_)) ;
				this.$data.languages =languages ;
				this.$children [0].$children [4].$data.languages =languages ;
			}

		}

	}
</script>

<style scoped>
#banner.Samples {
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

.repo-card {
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
	height: 14rem;
	width: calc(33% - 3rem);
}

.repo-count {
	float: left;
}

.card-title {
	color: #3566cc;
	margin: 0px auto;

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	line-height: 1em;
	height: 2em;
	overflow: hidden;
}

.repo-card p {
	margin: 0 auto;
}

.card-footer {
	width: 100%;
	padding: none;
	position: absolute;
	bottom: 10px;
}

.card-info {
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	line-height: 1em;
	height: 5em;
	overflow: hidden;
}

.repo-card-info-item {
	padding-right: 10px;
	color: #8b8b8b;
}

.repo-card-footer {
	color: #EE8822 !important;
}

.repo-card:hover {
	box-shadow: 0px 0px 10px 0px #cacaca;
	border: 1px solid #3566CC;
}

@media screen and (min-width: 1281px) {

    .repo-card {
        width: calc(25% - 4rem);
        max-width: 345px;
    }

}

@media screen and (max-width: 1280px) {

    .repo-card {
        /*width: 345px;*/
    }

}

@media screen and (max-width: 980px) {

    .repo-card {
        width: calc(50% - 4rem) !important;
    }

}

@media screen and (max-width: 736px) {

    .repo-card {
    }

}

@media screen and (max-width: 480px) {

    .repo-card {
        width: calc(100% - 3rem) !important;
    }

}

</style>
