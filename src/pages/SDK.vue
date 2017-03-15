<template>
	<main-layout>
		<link href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css" rel="stylesheet" />

		<section class="major">
			<div class="inner">
				<header class="major">
					<h3>Web SDKs</h3>
				</header>
			</div>
		</section>
		<div class="sdks-view">
			<a class="sdk-card" v-for="item in sdks" v-if="item.type == 'web' && item.hidden != true" v-bind:href="item.github">
				<div class="tiles">
					<div>
						<h3>{{ item.title }}</h3>
						<div v-bind:class="item.icon"></div>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</a>
		</div>
		<div style="clear: both;" />

		<section class="major" v-show="hasMobileSdks">
			<div class="inner">
				<header class="major">
					<h3>Mobile SDKs</h3>
				</header>
			</div>
		</section>
		<div class="sdks-view">
			<a class="sdk-card" v-for="item in sdks" v-if="item.type == 'mobile' && item.hidden != true" v-bind:href="item.github">
				<div class="tiles">
					<div>
						<h3>{{ item.title }}</h3>
						<div v-bind:class="item.icon"></div>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</a>
		</div>
		<div style="clear: both;" />

		<section class="major" v-show="hasDesktopSdks">
			<div class="inner">
				<header class="major">
					<h3>Desktop SDKs</h3>
				</header>
			</div>
		</section>
		<div class="sdks-view">
			<a class="sdk-card" v-for="item in sdks" v-if="item.type == 'desktop' && item.hidden != true" v-bind:href="item.github">
				<div class="tiles">
					<div>
						<h3>{{ item.title }}</h3>
						<div v-bind:class="item.icon"></div>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</a>
		</div>
		<div style="clear: both;" />

		<section id="four" class="style3">
			<div class="inner">
				<header class="major">
					<h2>Other programming language?</h2>
				</header>
				<p>You can find below a list of non official SDK as well as the Swagger-YAML definition of the
				FORGE REST API. YOu can try to generate client SDK for your favorite language using the
				<a href="http://swagger.io/" target="_blank">Swagger tools</a>.
				</p>

				<ul class="actions">
					<li><a href="https://yaml.autodesk.io/" target="demo" class="button next scrolly">Try YAML online</a></li>
					<li><a href="https://yaml-editor.autodesk.io/" target="demo" class="button next scrolly">Generate your SDK online</a></li>
				</ul>
			</div>
		</section>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue'

	export default {
		data: function () {
			var sdks =require ('../data/sdks.json') ;
			var hasMobileSdks =false ;
			var hasDesktopSdks =false ;
			for ( var key in sdks ) {
				if ( sdks [key].type == 'mobile' && sdks [key].hidden == false )
					hasMobileSdks =true ;
				if ( sdks [key].type == 'desktop' && sdks [key].hidden == false )
					hasDesktopSdks =true ;
			}
			var navigationMenu =require ('../data/navigation') ;
			for ( var i =0 ; i < navigationMenu.length ; i++ ) {
				if ( navigationMenu [i].image )
					navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
			}
			return ({
				title: 'Libraries/SDKs',
				description: `Easily use FORGE APIs in the programming language of your choice. Download
							  and install helpers for Node.js, PHP, iOS, Android, C#, and more.`,
				menu: navigationMenu,
				sdks: sdks,
				hasMobileSdks: hasMobileSdks,
				hasDesktopSdks: hasDesktopSdks
			}) ;
		},
		components: {
			MainLayout
		}
	}
</script>

<style>
#banner.SDK {
	background-image: url(./SDK/SDK2.png);
}
</style>

<style scoped>
div.sdks-view {
	position: relative;
	background-color: #6fc3df;
}

a.sdk-card {
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	text-decoration: none;
	text-size-adjust: 100%;
}

a.sdk-card div.tiles {
	border: solid 1px rgb(235, 239, 240);
	margin: 1em;
	padding: 2em 4em 2em 4em ;
	width: calc(25% - 2em);
	float: left;
	background-color: #6fc3df;
}

@media screen and (max-width: 1280px) {

	a.sdk-card div.tiles {
		padding: 2em 3em 2em 3em ;
	}

}

@media screen and (max-width: 980px) {

	a.sdk-card div.tiles {
		/*width: 50% !important;*/
		width: calc(50% - 2em) !important;
	}

}

@media screen and (max-width: 736px) {

	a.sdk-card div.tiles {
		padding: 1em 1.5em 1em 1.5em ;
	}

}

@media screen and (max-width: 480px) {

	a.sdk-card div.tiles {
		/*width: 100% !important;*/
		width: calc(100% - 2em) !important;
	}

}

a.sdk-card div[class^=devicon-] {
	font-size: 60px;
	color: #ec8d81;
}

</style>
