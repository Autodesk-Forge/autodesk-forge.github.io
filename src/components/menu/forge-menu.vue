<template>

        <div id="forge-menu" class="maxwidth forge-navbar">
            <ul>
                <li class="dropdown">APIs <i class="fa fa-angle-down" aria-hidden="true"></i></li>

                <li class="api-dropdown-header">General Availability</li>
                <li class="api-links" v-for="api in APIs">
                    <a v-bind:href="api.link">{{ api.name }}</a>
                </li>

				<hr />
				<li class="api-dropdown-header">Beta</li>
                <li class="api-links" v-for="api in betaAPIs">
                    <a v-bind:href="api.link">{{ api.name }}</a>
                </li>


                <li class="dropdown"><a href="https://developer.autodesk.com/pricing">Pricing</a></li>


                <li class="dropdown">Resources <i class="fa fa-angle-down" aria-hidden="true"></i></li>
                <li class="api-links" v-for="(link, resource) in resources">
                    <a v-bind:href="link">{{ resource }}</a>
                </li>

            </ul>
        </div>

</template>

<script>
import styles from './forge-menu.css' ; // eslint-disable-line no-unused-vars

var json =require ('../../data/navbar.json') ;

export default {
	//data: function () {
	//	return (this.$root.$children [0].$data) ;
	//}

	data () {
        return ({
            resources: json.resources,
            APIs: json.APIs,
            betaAPIs: json.betaAPIs
        }) ;
    },
    methods: {
    }

} ;
</script>