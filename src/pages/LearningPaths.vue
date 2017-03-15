<template>
	<main-layout>

		<!-- Main -->
		<div id="main">
			<!-- One -->
			<section id="one">
				<div class="inner">
					<header class="major">
						<h2>Where should I start?</h2>
					</header>
					<p>It is recommended to first go over to the following videos that have been created by the Forge
						Developer Advocates which help you to find out more about what each API is capable of doing.
					</p>

					<p>Once you feel ready, <a href="?GettingStarted#three">give it a try using cUrl commands</a>.</p>
				</div>
			</section>

			<!-- Two -->
			<section id="two" class="spotlights">
				<section id="data-management">
					<div class="iframe"><iframe src="https://www.youtube.com/embed/k0AL60JfRas" frameborder="0" allowfullscreen></iframe></div>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>Learning Path #1</h3>
							</header>
							<p>The following video will walk you thorough the steps on how to create an application with
							   the Forge Platform, This will give you back a set of API Keys in order to get started.
							   This is the very beginning of a series of videos.</p>
						</div>
					</div>
				</section>

				<section id="data-management">
					<div class="iframe"><iframe src="https://www.youtube.com/embed/SxJZLz_EsLQ" frameborder="0" allowfullscreen></iframe></div>
					<div class="content">
						<div class="inner">
							<header class="major">
								<h3>Learning Path #2</h3>
							</header>
							<p>This Video shows how to obtain a 2 Legged Authentication Token using the Forge
							   Authentication API. It follows the developer documentation with a cURL command from OSX
							   Terminal and also from Windows OS using Cygwin. As a side note, The video also shows the
							   use of a JSON Processor called JQ. A 2 legged Auth Token is returned.</p>
						</div>
					</div>
				</section>

				<section id="data-management">
                    <div class="iframe"><iframe src="https://www.youtube.com/embed/iw31I-c0nxI" frameborder="0" allowfullscreen></iframe></div>
                    <div class="content">
                        <div class="inner">
                            <header class="major">
                                <h3>Learning Path #3</h3>
                            </header>
                            <p>This Video shows how to obtain a 3 legged Authentication Token using the Forge
                               Authentication API. It follows the developer documentation with first an authorization
                               web flow to obtain back a code that will be one of the data values in the following cURL
                               command from OSX Terminal. A 3 legged Auth Token is returned.</p>
                        </div>
                    </div>
                </section>

                <section id="data-management">
                    <div class="iframe"><iframe src="https://www.youtube.com/embed/U2QB_o6mFrk" frameborder="0" allowfullscreen></iframe></div>
                    <div class="content">
                        <div class="inner">
                            <header class="major">
                                <h3>Learning Path #4</h3>
                            </header>
                            <p>This video makes a quick introduction about Scopes and the different ones you need to
                            perform different scenarios when using the Forge Platform. A 2 legged token and a 3 legged
                            token Authorization is demonstrated with different Scopes assigned.</p>
                        </div>
                    </div>
                </section>

			</section>

			<section id="four" class="style3">
                <div class="inner">
                    <!--header class="major">
                        <h2>Get your 2-legged Access Token</h2>
                    </header-->
                    <p>To be continued...</p>
                    <p>Come back in a few days to see more videos.</p>
                </div>
            </section>

		</div>

	</main-layout>
</template>

<script>
	import MainLayout from '../layouts/main.vue' ;

	export default {
		data: function () {
			var navigationMenu =require ('../data/navigation') ;
			for ( var i =0 ; i < navigationMenu.length ; i++ ) {
				if ( navigationMenu [i].image )
					navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
			}
			return ({
				title: 'Learning Paths',
				description: `Programmers are in higher demand today than ever before.
							  Get the essential skills and tools to become a successful Forge developer,
							  and learn the fundamental concepts and practices that are critical to the
							  task of coding—no matter what language you choose.`,
				menu: navigationMenu
			}) ;
		},
		components: {
			MainLayout
		}
	}
</script>

<style>
#banner.LearningPaths {
	background-image: url(./LearningPaths/LearningPaths2.png);
}
</style>

<style scoped>
.spotlights > section > .iframe iframe {
	position: relative;
	top: 50%;
	left: 50%;
	-webkit-transform: translateY(-50%) translateX(-50%);
	-ms-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);

	width: 100%;
	height: calc(30vw / 1.77);
}

.spotlights > section > .iframe {
	width: 30%;
}

.spotlights > section:nth-child(6n - 5) > .iframe,
.spotlights > section:nth-child(6n - 5) > .iframe iframe {
	background-color: #6fc3df;
}

.spotlights > section:nth-child(6n - 4) > .iframe,
.spotlights > section:nth-child(6n - 4) > .iframe iframe {
	background-color: #8d82c4;
}

.spotlights > section:nth-child(6n - 3) > .iframe,
.spotlights > section:nth-child(6n - 3) > .iframe iframe {
	background-color: #ec8d81;
}

.spotlights > section:nth-child(6n - 2) > .iframe,
.spotlights > section:nth-child(6n - 2) > .iframe iframe {
	background-color: #e7b788;
}

.spotlights > section:nth-child(6n - 1) > .iframe,
.spotlights > section:nth-child(6n - 1) > .iframe iframe {
	background-color: #8ea9e8;
}

.spotlights > section:nth-child(6n) > .iframe,
.spotlights > section:nth-child(6n) > .iframe iframe {
	background-color: #87c5a4;
}

@media screen and (max-width: 1680px) {

	.spotlights > section > .iframe {
		width: 40%;
	}

	.spotlights > section > .iframe iframe {
		height: calc(40vw / 1.77);
	}

}

@media screen and (max-width: 1280px) {

	.spotlights > section > .iframe {
		width: 45%;
	}

	.spotlights > section > .iframe iframe {
		height: calc(45vw / 1.77);
	}

}

@media screen and (max-width: 980px) {

	.spotlights > section > .iframe {
		width: 100%;
		height: calc(100vw / 1.77);
	}

	.spotlights > section > .iframe iframe {
		position: relative;
		top: 0%;
		left: 50%;
		-webkit-transform: translateY(0%) translateX(-50%);
		-ms-transform: translateY(0%) translateX(-50%);
		transform: translateY(0%) translateX(-50%);

		width: 100%;
		height: 100%;
	}

}
</style>
