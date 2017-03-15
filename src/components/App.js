
//import Vue from 'vue' ;
import Vue from 'vue/dist/vue' ;
import VueResource from 'vue-resource/dist/vue-resource' ;
import routes from '../data/Routes.js' ;
import * as skelFct from './skel.js' ;
import * as initFct from './init.js' ;
//import VueHighlightJS from 'vue-highlightjs' ;

Vue.use (VueResource) ;
//Vue.use (VueHighlightJS) ;

// https://vuejs.org/v2/guide/instance.html
const app =new Vue ({
	el: '#app',
	data: function () {
		return ({
			currentRoute: window.location.search,
		}) ;
	},
	computed: {
		ViewComponent () {
			const matchingView =routes [this.currentRoute === '' ? '#' : this.currentRoute] ;
			return (matchingView ?
					  require ('../pages/' + matchingView + '.vue')
					: require ('../pages/404.vue')
			) ;
		}
	},
	render (h) {
		return (h (this.ViewComponent)) ;
	},
	mounted () {
		skelFct.initializeSkel (jQuery) ;
		skelFct.initializeParallax (jQuery) ;
		initFct.init (jQuery) ;
		initFct.tiles (jQuery) ;
		initFct.header (jQuery) ;
		initFct.banner (jQuery) ;
		initFct.menu (jQuery) ;
		initFct.forgeMenu (jQuery) ;
	}
}) ;

window.addEventListener ('popstate', () => {
	app.currentRoute =window.location.search ;
}) ;

import styles from './App.css' ;

// hash: "#viewer-api"
// host: "localhost:3000"
// hostname: "localhost"
// href: "http://localhost:3000/index.html?WhatIsForge#viewer-api"
// origin: "http://localhost:3000"
// pathname: "/index.html"
// port: "3000"
// protocol: "http:"
// search: "?WhatIsForge"
