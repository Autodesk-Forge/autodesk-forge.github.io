<template>
		<!-- Menu -->
        <nav id="menu">
            <ul class="links">
                <li v-for="item in menu" v-if="item.hidden != true">
                    <a v-bind:href="item.href">{{ item.title }}</a>
                </li>
            </ul>
            <ul class="actions vertical">
                <li><a href="http://developer.autodesk.com/" class="button special fit">Forge Developer Site</a></li>
                <li><a href="https://gems.autodesk.com/devcon" class="button fit">Forge Conference</a></li>
            </ul>
        </nav>
</template>

<script>
import styles from './menu.css' ; // eslint-disable-line no-unused-vars

export default {
	data: function () {
		return (this.$root.$children [0].$data) ;
	}
} ;
</script>