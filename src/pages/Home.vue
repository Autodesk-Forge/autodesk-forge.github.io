<template>
	<main-layout>

		<!-- el-button @click="visible = true">Button</el-button>
		<el-dialog v-model="visible" title="Hello world">
		  <p>Try Element</p>
		</el-dialog -->

		<!-- Main -->
		<div id="main">
			<section id="one" class="tiles">
				<article v-for="item in menu" v-if="item.hidden != true" v-bind:class="item.style + '-article'">
					<span class="image">
						<img v-bind:src="item.image" alt="" />
					</span>
					<header class="major">
						<h3><a v-bind:href="item.href" class="link">{{ item.title }}</a></h3>
						<p>{{ item.description }}</p>
					</header>
				</article>
			</section>

		</div>

	</main-layout>
</template>

<script>
import MainLayout from '../layouts/main.vue' ;
////import { ElButton, ElDialog } from 'element-ui';
//import ElButton from 'element-ui/packages/button/src/button.vue';
//import ElDialog from 'element-ui/packages/dialog/src/component.vue';

export default {
	name: 'home-vue',

	data: function () {
		var navigationMenu =require ('../data/navigation') ;
		for ( var i =0 ; i < navigationMenu.length ; i++ ) {
			if ( navigationMenu [i].image )
				navigationMenu [i].image =require ('' + navigationMenu [i].image) ;
		}
		return ({
			title: 'Build with FORGE',
			description: `The Forge platform unlocks the functionality in Autodesk products that have been
						  serving industries such as architecture, engineering, construction, manufacturing,
						  media, and others.`,
			menu: navigationMenu,
			visible: false
		}) ;
	},
	components: {
		MainLayout,
		//ElButton, ElDialog
	}
} ;
</script>

<style scoped>
.whatisforge-article {
	background-image: url(./Home/questions.jpg);
}

.gettingstarted-article {
	background-image: url(./Home/plant.jpg);
}

.learningpaths-article {
	background-image: url(./Home/labyrinth.jpg);
}

.playwithitlive-article {
	background-image: url(./Home/tryitnow.png);
}

.sdks-article {
	background-image: url(./Home/sdk.jpg);
}

.samples-article {
	background-image: url(./Home/sample.png);
}

.arvr-article {
	background-image: url(./Home/arvr2.png);
}

.presentations-article {
	background-image: url(./Home/presentations.jpg);
}
</style>
