<template>
	<main-layout>

	    <section class="style6">
			<div class="inner">
	            <header class="major">
	                <h2>Experimenting VR using the FORGE viewer.</h2>
	            </header>
	            <p>The latest FORGE viewer version can display content on Oculus, Google cardboard, and devices
	               supporting WebVR. Checkout the examples below,</p>

	           <ul class="actions">
	                <li><a href="http://www.vrok.it/" target="demo" class="button next scrolly" title="Source code available on https://github.com/KeanW/vr-party">VR Party</a></li>
	                <li><a href="http://vr.autodesk.io/" target="demo" class="button next scrolly" title="Source code available on https://github.com/cyrillef/google-cardboard-vr">Example #1</a></li>
	            </ul>
	        </div>
	    </section>

	    <div class="owl-carousel">
	        <div v-for="item in arvr" v-if="item.hidden != true">
	            <a v-bind:href="item.href" target="demo"><img v-bind:src="item.img" /></a>
	        </div>
	    </div>

	    <section class="style3">
	            <div class="inner">
	                <header class="major">
	                    <h2>FORGE for Hololens.</h2>
	                </header>
	                <p>As FORGE can translate any file format to JSON data, why not using it to bring 3d content onto
	                   the Hololens using an agnostic pipeline.</p>

	               <ul class="actions">
	                    <li><a href="https://github.com/KeanW/Dancing-Robot" target="demo" class="button next scrolly">Dancing Robot</a></li>
	                    <li><a href="https://github.com/cyrillef/Holo-Forge" target="demo" class="button next scrolly">Forge to Hololens</a></li>
	                </ul>
	            </div>
	        </section>

	    <section id="two" class="spotlights">
	        <section>
	            <div class="image"><img src="./ARVR/dodocase-vr.png" /></div>
	            <div class="content">
	                <div class="inner">
	                    <header class="major">
	                        <h2>Immersive Experience On Your Smartphone</h2>
	                    </header>
	                    <p>Open any Panorama or Turntable on your smart phone. Then drop your mobile device into the DIY Goggles and enjoy.</p>

	                    <ul class="actions">
	                        <li><a href="http://aupano.autodesk.com/" target="demo" class="button next scrolly">View More ...</a></li>
	                    </ul>
	                </div>
	            </div>
	        </section>

			<section>
	            <div class="image"><img src="./ARVR/raas.png" /></div>
	            <div class="content">
	                <div class="inner">
	                    <header class="major">
	                        <h2>A360 | Rendering</h2>
	                    </header>
	                    <p>Create photorealistic images with cloud rendering. Autodesk® A360 is a project-based collaboration
	                       tool that brings the people, the data and all of the activities within a project together.
	                       Experience a dramatic improvement in the way you design, visualize, simulate, and share your
	                       work-on demand. You can also create Stereo-panorama from there.</p>

	                    <ul class="actions">
	                        <li><a href="https://gallery.autodesk.com/a360rendering/projects" target="demo" class="button next scrolly">View More ...</a></li>
	                    </ul>
	                </div>
	            </div>
	        </section>
		</section>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue' ;

	// https://www.npmjs.com/package/owl.carousel
	// http://stackoverflow.com/questions/40483358/import-owl-carousel-from-webpack
	import 'owl.carousel' ;
	import styles from 'owl.carousel/dist/assets/owl.carousel.css'; // eslint-disable-line no-unused-vars
	import 'owl.carousel/dist/assets/owl.theme.default.css';

	export default {
		data: function () {
			var arvr =require ('../data/arvr.json') ;
            for ( var i =0 ; i < arvr.length ; i++ ) {
                if ( arvr [i].img )
                    arvr [i].img =require ('./ARVR/' + arvr [i].img) ;
            }
			var navigationMenu =require ('../data/navigation') ;
            for ( var j =0 ; j < navigationMenu.length ; j++ ) {
                if ( navigationMenu [j].image )
                    navigationMenu [j].image =require ('' + navigationMenu [j].image) ;
            }
			return ({
				title: 'AR/VR experiments',
				description: 'Experimental virtual reality (VR) and augmented reality (AR) projects and references.',
				menu: navigationMenu,
				arvr: arvr
			}) ;
		},
		components: {
			MainLayout
		},
		mounted () {
			var owl =$('.owl-carousel') ;
			owl.owlCarousel ({
				//items: this.$data.arvr.length,
				items: 4,
                loop: true,
                margin: 10,

                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true,

                responsive: {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                    },
                    // breakpoint from 480 up
                    480 : {
                        items: 2,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 4,
                    }
                }
            }) ;
            owl.on ('mouseleave', function (evt) {
                evt.stopPropagation () ;
                owl.trigger ('stop.owl.autoplay') ;
                setTimeout (function () { owl.trigger ('play.owl.autoplay', [ 1000 ]) ; }, 500) ;
            }) ;
		}
	}
</script>

<style>
#banner.ARVR {
    background-image: url(./ARVR/arvr.png);
}
</style>
