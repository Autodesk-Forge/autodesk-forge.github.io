<template>

	<div class="maxwidth forge-navbar">
		<ul>
			<li class="dropdown"><a href="" class="dropdown-title no-click">APIs <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content api-dropdown">
					<div class="api-dropdown-col">
						<h4 class="api-dropdown-header">General Availability</h4>
						<a v-for="api in APIs" :href="api.link">{{ api.name }}</a>
					</div>
					<div class="api-dropdown-col">
						<h4 class="api-dropdown-header">Beta</h4>
						<a v-for="api in betaAPIs" :href="api.link">{{ api.name }}</a>
					</div>
				</div>
			</li>
			<li><a href="https://developer.autodesk.com/pricing">Pricing</a></li>
			<li class="dropdown">
				<a href="" class="dropdown-title no-click">Resources <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content">
					<a v-for="(link, resource) in resources" :href="link">{{ resource }}</a>
				</div>
			</li>

		</ul>
	</div>

</template>

<script>
	/*const resources ={
		"Get Help": "https://developer.autodesk.com/en/support/get-help",
		"API Status": "https://developer.autodesk.com/en/support/api-status",
		"Blog": "https://forge.autodesk.com/blog"
	} ;
	const APIs =[
		{ name: "Authentication (OAuth)", link: "https://developer.autodesk.com/en/docs/oauth/v2/overview/" },
		{ name: "Data Management API", link: "https://developer.autodesk.com/en/docs/data/v2/overview/" },
		{ name: "Design Automation API", link: "https://developer.autodesk.com/en/docs/design-automation/v2/overview/" },
		{ name: "Model Derivative API", link: "https://developer.autodesk.com/en/docs/model-derivative/v2/overview/" },
		{ name: "Authentication (OAuth)", link: "https://developer.autodesk.com/en/docs/viewer/v2/overview/" }
	] ;
	const betaAPIs =[
		//{ name: "3D Print API (Deprecated)", link: "https://developer.autodesk.com/en/docs/print/v1/overview/" },
		{ name: "BIM 360 API", link: "https://developer.autodesk.com/en/docs/bim360/v1/overview/" },
		{ name: "Reality Capture API", link: "https://developer.autodesk.com/en/docs/reality-capture/v1/overview/" }
	] ;*/
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
ul li {
	display: inline-block;
}

li {
	list-style: none;
	/*padding-top: 20px;*/
	padding-right: 40px;
}

li.right {
	float: right;
}

li.search {
	padding-top: 16px;
}

.no-click:active {
	pointer-events: none;
	cursor: default;
}

li.dropdown a, li a {
	border: 0;
}

.dropdown-content {
	display: none;
	position: absolute;
	background-color: white;
	min-width: 240px;
	box-shadow: 1px 1px 4px 0 #666;
	z-index: 100;
	border-radius: 5px;
}

.dropdown-content a {
	color: black;
	padding: 15px 20px 10px 20px;
	text-decoration: none;
	display: block;
    line-height: 15.4px;
    text-size-adjust: 100%;
    font-family: "Artifakt Element", "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: normal;
}

.dropdown:hover .dropdown-content {
	display: block;
}

.dropdown-title {
	margin-bottom: 10px;
	color: black;
	font-size: 14px;
}

.forge-navbar {
	list-style: none;
	margin: 0 auto;
	padding-top: 5px;
	min-height: 54px;
	/*background-color: white;*/
	color: black;
	font-size: 14px;
	font-weight: normal;
	font-family: "Artifakt Element", "Open Sans", Helvetica, Arial, sans-serif;
    /*vertical-align: middle;*/
    letter-spacing: normal;
    text-transform: none;
}

.api-dropdown {
	min-width: 400px;
}

.api-dropdown-col {
	float: left;
	width: 50%;
	padding-bottom: 12px;
}

.api-dropdown-header {
	color: #999;
	font-size: 12px;
	margin: 20px 0 0 20px;
	text-transform: uppercase;
}


@media (max-width: 740px) {
	ul li {
		display: block;
	}

	li.right {
		float: none;
	}

	div.forge-navbar {
		display: none;
	}
}

</style>
