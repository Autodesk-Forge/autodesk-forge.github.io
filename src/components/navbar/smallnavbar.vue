<template>

	<div class="maxwidth forge-smallnavbar">
		<a href="#forge-menu">_</a>
	</div>

</template>

<script>
	var json =require ('../../data/navbar.json') ;

	export default {
		data () {
			return ({
				resources: json.resources,
				APIs: json.APIs,
				betaAPIs: json.betaAPIs
			}) ;
		},
		methods: {
		}
	}
</script>

<style scoped>

.forge-smallnavbar a {
    border: 0;
    display: block;
    font-size: 0.8em;
    height: inherit;
    line-height: inherit;
    padding: 0 0.75em;
    position: relative;
    vertical-align: middle;
    content: "";
    width: 1px;
}

.forge-smallnavbar a:last-child {
    padding-right: 1.5em;
}

.forge-smallnavbar a[href="#forge-menu"] {
    padding-right: 3.325em !important;
}

.forge-smallnavbar a[href="#forge-menu"]:before, .forge-smallnavbar a[href="#forge-menu"]:after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %23ffffff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px 32px;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    right: 1.5em;
    top: 0;
    vertical-align: middle;
    width: 24px;
}

.forge-smallnavbar a[href="#forge-menu"]:after {
    -moz-transition: opacity 0.2s ease-in-out;
    -webkit-transition: opacity 0.2s ease-in-out;
    -ms-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='32' viewBox='0 0 24 32' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 2px%3B stroke: %239bf1ff%3B %7D%3C/style%3E%3Cline x1='0' y1='11' x2='24' y2='11' /%3E%3Cline x1='0' y1='21' x2='24' y2='21' /%3E%3Cline x1='0' y1='16' x2='24' y2='16' /%3E%3C/svg%3E");
    opacity: 1;
    z-index: 1;

    -webkit-filter: grayscale(1) contrast(0);
    filter: grayscale(1) contrast(0);
}

.forge-smallnavbar a[href="#forge-menu"]:hover:after, .forge-smallnavbar a[href="#forge-menu"]:active:after {
    opacity: 1;
    -webkit-filter: none;
    filter: none;
}

.forge-smallnavbar {
	display: none;
}

@media (max-width: 740px) {
	.forge-smallnavbar {
		display: block;
		width: calc(50% - 63px);
	}
}

</style>
