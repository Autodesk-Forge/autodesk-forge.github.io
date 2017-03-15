<template>
	<!-- Wrapper -->
	<div id="wrapper">
		<app-header></app-header>
		<app-menu></app-menu>
		<forge-menu></forge-menu>
		<app-banner v-bind:class="bannerClass"></app-banner>
		<slot></slot>
		<app-contact></app-contact>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import appHeader from '../components/header/header.vue' ;
	import appMenu from '../components/menu/menu.vue' ;
	import forgeMenu from '../components/menu/forge-menu.vue' ;
	import appBanner from '../components/banner/banner.vue' ;
	import appContact from '../components/contact/contact.vue' ;
	import appFooter from '../components/footer/footer.vue' ;

	import routes from '../data/Routes.js' ;

	export default {
		data: function () {
			//return ({ bannerClass: this.$root.$data.bannerClass }) ;
			var info =this.$parent.$data ;
			return ({
				bannerClass: routes [window.location.search], // eslint-disable-line no-undef
				title: info.title,
				description: info.description
			}) ;
		},
		components: {
			appHeader, forgeMenu, appMenu, appBanner, appContact, appFooter
		}
	}
</script>