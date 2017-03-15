<template>

	<!-- Header -->
	<header id="header" class="alt">

		<smallnavbar id="smallbar"></smallnavbar>

	    <a href="index.html" class="logo"><img src="./logo_forge-2-line.png" /></a>

		<navbar id="navbar"></navbar>

	    <nav><a href="#menu">Menu</a></nav>

	</header>

</template>

<script>
	import styles from './header.css' ; // eslint-disable-line no-unused-vars
	import smallnavbar from '../navbar/smallnavbar.vue' ;
	import navbar from '../navbar/navbar.vue' ;

	export default {
		components: {
			smallnavbar, navbar
		}
	}
</script>
