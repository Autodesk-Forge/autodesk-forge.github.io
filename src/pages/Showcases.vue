<template>
    <main-layout>


    <div class="maxwidth">
		<a v-for="demo in demos" v-bind:href="demo.url" v-if="demo.hidden != true">
			<div class="repo-card forge-title" style="background-image: url(/src/pages/Showcases/forge-rocks.png)">
				<div>
					<h3 class="card-title" v-bind:title="demo.title">{{ demo.title }}</h3>
					<p>
						<span class="repo-card-info-item"><i class="fa fa-star" aria-hidden="true"></i> 0</span>
						<span class="repo-card-info-item"><i class="fa fa-code-fork" aria-hidden="true"></i> 1</span>
						<span class="repo-card-info-item"><i class="fa fa-code" aria-hidden="true"></i> 2</span>
					</p>
					<p class="card-info" v-bind:title="demo.description">{{ demo.description }}</p>
				</div>
				<div class="card-footer">
					<a v-show="demo.github" v-bind:href="demo.github" target="_blank" class="repo-card-footer">
						<i class="fa fa-github" aria-hidden="true"></i> Source Code
					</a>
				</div>
			</div>
		</a>
    </div>
    <div style="clear: both;"></div>


    <div class="">
        <div class="" v-for="item in demos" v-if="item.hidden != true">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
        </div>
    </div>

    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/main.vue' ;

    export default {
        name: 'showcases-vue',

        created: function () {
            this.fetchData () ;
        },

        data: function () {
            var navigationMenu =require ('../data/navigation') ;
            for ( var i =0 ; i < navigationMenu.length ; i++ ) {
                if ( navigationMenu [i].image )
                    navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
            }
            return ({
                title: 'Showcases',
                description: `Check out these demos and see Forge in action.`,
                menu: navigationMenu,
                demos: {},
            }) ;
        },
        components: {
            MainLayout
        },
        methods: {

            fetchData: function () {
                var self =this ;
                this.$root.$http.get (window.location.pathname + 'src/data/showcases.json') // eslint-disable-line no-undef
                     .then (function (response) {
                         //console.log (response) ;
                         var demos =response.data ;
                         console.log (demos) ;
                         self.prepareData (demos) ;
                     }) ;
                     //.catch (function (error) {
                     //    console.error (error) ;
                     //}) ;
            },

            prepareData: function (demos) {
                this.$data.demos =demos ;
            }

        }

    }
</script>

<style scoped>
#banner.Showcases {
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
