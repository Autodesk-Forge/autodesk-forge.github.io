<template>
	<main-layout>

	<section class="style5">
        <div class="inner">
            <header class="major">
                <h2>Forge Samples and SDKs</h2>
            </header>
            <p>Check out these samples, tutorials, and SDKs created to help speed up your Forge application development.
                               Visit our <a href="https://forge.autodesk.com/blog" target="_blank">blog</a> for more code snippets,
                               tips, and tricks.</p>
        </div>
    </section>
    <div style="clear: both;"></div>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue' ;

	export default {
		name: 'samples-vue',

		mounted: function () {
			this.$route.router.go ("https://forge.autodesk.com/learn-examples") ;
		},

		data: function () {
			return ({
				title: 'Samples & Live Demos',
				description: `Check out these samples, tutorials, and SDKs created to help speed up your Forge
							  application development. Visit our blog for more code snippets, tips, and tricks.`
			}) ;
		},
		components: {
			MainLayout
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

</style>
