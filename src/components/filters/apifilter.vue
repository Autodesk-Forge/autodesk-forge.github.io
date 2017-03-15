<template>
	<div class="maxwidth forge-navbar">
		<!-- pre>{{ $data | json }}</pre -->
		<a name="forge-samples" id="forge-samples" />

		<ul>
			<li><a href="javascript:void(0)" @click="switchFilterSearch(this)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
			<li class="searchHidden">
				<input type="search"
					v-model="searchText"
					@keyup="search(searchText)"
					@search="search(searchText)"
					placeholder="Search Repos" />
					<!-- @keyup.enter="searchGithub()" -->
			</li>
			<li class="dropdown">Filter:&nbsp;
				<a href="javascript:void(0)" class="dropdown-title no-click">{{ filterAPI }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content">
					<a v-for="api in apis" href="javascript:void(0)" v-on:click="filterAPI = api" @click="filter(filterAPI, filterLanguage)">{{ api }}</a>
				</div>
			</li>
			<li class="dropdown">
				<a href="javascript:void(0)" class="dropdown-title no-click">{{ filterLanguage }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content">
					<a v-for="lg in languages" href="javascript:void(0)" v-on:click="filterLanguage = lg" @click="filter(filterAPI, filterLanguage)">{{ lg }}</a>
				</div>
			</li>
			<li class="dropdown">Sort: &nbsp;
				<a href="javascript:void(0)" class="dropdown-title no-click">{{ sortValue }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content">
					<a v-for="sorttype in sorted" href="javascript:void(0)" v-on:click="sortValue = sorttype" @click="sortBy(sorttype)">{{ sorttype }}</a>
				</div>
			</li>
		</ul>
	</div>

</template>

<script>
	//import JsSearch from 'js-search' ;

	export default {
		data: function () {
			var info =this.$root.$children [0].$data ;
			info =JSON.parse (JSON.stringify (info)) ;
			return ({
				apis: info.apis,
				filterAPI: info.filterAPI,
				languages: info.languages,
				filterLanguage: info.filterLanguage,
				sorted: info.sort,
				sortValue: info.sortValue,

				searchText: ''
			}) ;
		},
		methods: {
			sortBy: function (value) {
				var info =this.$root.$children [0].$data ;
				var repos =info.repos ;
				var allRepos =info.allRepos ;
				switch ( value ) {
					case 'Most Popular': {
						repos.sort ((a, b) => {
							return (b.stargazers_count - a.stargazers_count) ;
						}) ;
						allRepos.sort ((a, b) => {
							return (b.stargazers_count - a.stargazers_count) ;
						}) ;
						break ;
					}
					case 'Last Updated': {
						repos.sort ((a,b) => {
							return (b.updated_at.localeCompare (a.updated_at)) ;
						}) ;
						allRepos.sort ((a,b) => {
							return (b.updated_at.localeCompare (a.updated_at)) ;
						}) ;
						break ;
					}
					case 'Alphabetical': {
						repos.sort ((a, b) => {
							return (a.name.localeCompare (b.name)) ;
						}) ;
						allRepos.sort ((a, b) => {
							return (a.name.localeCompare (b.name)) ;
						}) ;
						break ;
					}
					case 'Backwards ABC': {
						repos.sort ((a, b) => {
							return (b.name.localeCompare (a.name)) ;
						}) ;
						allRepos.sort ((a, b) => {
							return (b.name.localeCompare (a.name)) ;
						}) ;
						break ;
					}
					default:
						break ;
				}
			},

			filter: function (api, language) {
				var JsSearch =require ('js-search') ;

				var info =this.$root.$children [0].$data ;
				var repos =info.repos ;
				repos.splice (0, repos.length) ;
				repos.push (...info.allRepos) ;
				let results =[...repos] ;
				// api search is fuzzier
				if ( api !== info.apis [0] ) {
					let repoSearch =new JsSearch.Search ('id') ;
					repoSearch.addIndex ('name') ;
					repoSearch.addDocuments (results) ;
					results =repoSearch.search (api) ;
				}
				if ( language !== info.languages [0] ) {
					let search =new JsSearch.Search ('id') ;
					search.indexStrategy =new JsSearch.ExactWordIndexStrategy () ;
					search.addIndex ('language') ;
					search.addDocuments (results) ;
					results =search.search (language) ;
				}
				repos.splice (0, repos.length) ;
				repos.push (...results) ;

				this.sortBy (this.sortValue) ;
			},

			search: function (searchText) {
				var JsSearch =require ('js-search') ;

				var info =this.$root.$children [0].$data ;
				var repos =info.repos ;

				let repoSearch =new JsSearch.Search ('id') ;
				repoSearch.addIndex ('name') ;
				repoSearch.addIndex ('description') ;
				repoSearch.addIndex ('language') ;
				repoSearch.addDocuments (info.allRepos) ;

				repos.splice (0, repos.length) ;
				repos.push (...info.allRepos) ;
				if ( searchText ) {
					let results =[] ;
					results =repoSearch.search (searchText) ;
					repos.splice (0, repos.length) ;
					repos.push (...results) ;
				}
				this.sortBy (this.sortValue) ;
				//this.filter (this.filterAPI, this.filterLanguage) ;
			},

			switchFilterSearch: function (evt) {
				//evt =evt.fn.arguments [0] ;
				evt =evt.event ;
				$("div#apifilter li.dropdown").toggle () ;
				var childs =$(evt.target).parents ('ul').children () ;
				$(evt.target).toggleClass ('fa-search-minus') ;
				$(evt.target).toggleClass ('fa-search') ;
				//$(childs [1]).toggle () ;
				$(childs [1]).toggleClass ('searchVisible') ;
			}

		}
	}
</script>

<style scoped>
ul {
	height: 0px;
}

ul li {
	display: inline-block;
}

li {
	list-style: none;
	padding-right: 20px;
}

li.right {
	float: right;
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
	padding: 5px 20px 5px 20px;
	text-decoration: none;
	display: block;
}

.dropdown:hover .dropdown-content {
	display: block;
}

.dropdown-title {
	margin-bottom: 10px;
	color: white;
	font-size: 14px;
}

.forge-navbar {
	list-style: none;
	margin: 0 auto;
	/*padding-top: 5px;*/
	/*min-height: 54px;*/
	color: black;
	text-transform: none;
	float: right;
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

div.forge-navbar input[type=search] {
	all: initial;
	* {
		all: unset;
	}
	color: white;
	border: solid 1px white;
	padding: 2px;
}

li.searchHidden {
	display: none;
}

li.searchVisible {
	display: inline-block;
}

@media (max-width: 740px) {
	ul li {
		display: block;
	}

	li.right {
		float: none;
	}

	.forge-navbar {
		display: none;
	}

	/*div.forge-navbar input[type=search] {
		display: block;
	}*/
}
</style>
