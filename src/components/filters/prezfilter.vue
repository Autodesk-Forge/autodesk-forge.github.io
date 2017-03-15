<template>
	<div class="maxwidth forge-navbar">
		<!--pre>{{ $data | json }}</pre-->
		<a name="forge-slideshare" id="forge-slideshare" />

		<ul>
			<li><a href="javascript:void(0)" @click="switchFilterSearch(this)"><i class="fa fa-search" aria-hidden="true"></i></a></li>
			<li class="searchHidden">
				<input type="search"
					v-model="searchText"
					@keyup="searchPrez(searchText)"
					@search="searchPrez(searchText)"
					placeholder="Search presentation" />
					<!-- @keyup.enter="searchSlideshare()" -->
			</li>
			<li class="dropdown">Author:&nbsp;
				<a href="javascript:void(0)" class="dropdown-title no-click">{{ filterAuthor }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				<div class="dropdown-content">
					<a v-for="author in sortAuthorValues (authors, 'All Prez')" href="javascript:void(0)" v-on:click="filterAuthor = author" @click="filterAuthors(filterAuthor)">{{ author }}</a>
				</div>
			</li>
			<li class="dropdown">Sort: &nbsp;
                <a href="javascript:void(0)" class="dropdown-title no-click">{{ sortValue }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <div class="dropdown-content">
                    <a v-for="sorttype in sorted" href="javascript:void(0)" v-on:click="sortValue = sorttype" @click="sortPrezBy(sorttype)">{{ sorttype }}</a>
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
				authors: info.authors,
				filterAuthor: info.filterAuthor,

				prez: info.prez,

                sorted: info.sorted,
                sortValue: info.sortValue,

				searchText: ''
			}) ;
		},
		methods: {

			sortAuthorValues: function (obj, first) {
                let list =Object.values (obj).sort () ;
                if ( first !== undefined ) {
                    let index =list.indexOf (first) ;
                    list.splice (index, 1) ;
                    list.unshift (first) ;
                }
                return (list) ;
            },

			sortPrezBy: function (value) { // eslint-disable-line no-unused-vars
				var info =this.$root.$children [0].$data ;
				var prez =info.prez ;
				var allPrez =info.allPrez ;
				switch ( value ) {
					case 'Most Popular': {
						prez.sort ((a, b) => {
							return (b.favorites_count - a.favorites_count) ;
						}) ;
						allPrez.sort ((a, b) => {
							return (b.favorites_count - a.favorites_count) ;
						}) ;
						break ;
					}
					case 'Most Views': {
                        prez.sort ((a, b) => {
                            return (b.view_count - a.view_count) ;
                        }) ;
                        allPrez.sort ((a, b) => {
                            return (b.view_count - a.view_count) ;
                        }) ;
                        break ;
                    }
                    case 'Most Favorites': {
                        prez.sort ((a, b) => {
                            return (b.favorites_count - a.favorites_count) ;
                        }) ;
                        allPrez.sort ((a, b) => {
                            return (b.favorites_count - a.favorites_count) ;
                        }) ;
                        break ;
                    }
					case 'Last Posted': {
						prez.sort ((a,b) => {
							return (b.created_at.localeCompare (a.created_at)) ;
						}) ;
						allPrez.sort ((a,b) => {
							return (b.created_at.localeCompare (a.created_at)) ;
						}) ;
						break ;
					}
					case 'Alphabetical': {
						prez.sort ((a, b) => {
							return (a.title.localeCompare (b.title)) ;
						}) ;
						allPrez.sort ((a, b) => {
							return (a.title.localeCompare (b.title)) ;
						}) ;
						break ;
					}
					case 'Backwards ABC': {
						prez.sort ((a, b) => {
							return (b.title.localeCompare (a.title)) ;
						}) ;
						allPrez.sort ((a, b) => {
							return (b.title.localeCompare (a.title)) ;
						}) ;
						break ;
					}
					default:
						break ;
				}
			},

			filterAuthors: function (author) {
				let info =this.$root.$children [0].$data ;
				let prez =info.prez ;
                prez.splice (0, prez.length) ;
                if ( author === 'All Prez' ) {
					prez.push (...info.allPrez) ;
					return ;
				}

				let results =[] ;
                for ( let pr in info.allPrez ) {
                    if ( info.allPrez [pr].user_login == author )
                        prez.push (info.allPrez [pr]) ;
                }

                prez.push (...results) ;
				//this.sortPrezBy (this.sortValue) ;
			},

			searchPrez: function (searchText) {
				var JsSearch =require ('js-search') ;

				var info =this.$root.$children [0].$data ;
				var prez =info.prez ;

				let prezSearch =new JsSearch.Search ('id') ;
				prezSearch.addIndex ('title') ;
				prezSearch.addIndex ('description') ;
				prezSearch.addDocuments (info.allPrez) ;

				prez.splice (0, prez.length) ;
				prez.push (...info.allPrez) ;
				if ( searchText ) {
					let results =[] ;
					results =prezSearch.search (searchText) ;
					prez.splice (0, prez.length) ;
					prez.push (...results) ;
				}
				this.sortPrezBy (this.sortValue) ;
			},

			switchFilterSearch: function (evt) {
				//evt =evt.fn.arguments [0] ;
				evt =evt.event ;
				$("div#prezfilter li.dropdown").toggle () ;
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
