<template>
  <div class="forge-body">
    <div class="forge-top-filter">
      <div class="maxwidth" style="padding-left:20px; padding-right:20px">
        <div style="padding-top:8px; display:inline-block;"><strong>{{repos.length}}</strong> of {{allReposCount}} Samples in Github</div>
        <span style="float: right; ">
                Filter by
                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
                        {{ filterAPI }} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="api in apis"><a href="#" v-on:click="filterAPI = api" @click="filter(filterAPI, filterLanguage)">{{ api }}</a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
          {{ filterLanguage }} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="language in languages"><a href="#" v-on:click="filterLanguage = language" @click="filter(filterAPI, filterLanguage)">{{ language }}</a>
          </li>
        </ul>
      </div>
      Sort by
      <div class="dropdown">
        <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
          {{ sortValue }} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="value in sort"><a href="#" v-on:click="sortValue = value" @click="sortBy(value)">{{ value }}</a>
          </li>
        </ul>
      </div>
      </span>
    </div>
  </div>
  <div class="maxwidth">
    <a v-for="repo in repos" v-bind:href="repo.html_url">
      <div class="repo-card forge-title">
        <div>
          <h3 class="card-title">{{ repo.name }}</h3>
          <p>
            <span class="repo-card-info-item"><i class="fa fa-star" aria-hidden="true"></i> {{ repo.stargazers_count }}</span>
            <span class="repo-card-info-item"><i class="fa fa-code-fork" aria-hidden="true"></i> {{ repo.forks_count }}</span>
            <span class="repo-card-info-item"><i class="fa fa-code" aria-hidden="true"></i> {{ repo.language }}</span>
          </p>
          <p class="card-info">{{ repo.description }}</p>
        </div>
        <div class="card-footer">
          <a v-show="repo.homepage" v-bind:href="repo.homepage" target="_blank" class="repo-card-footer">
            <i class="fa fa-desktop" aria-hidden="true"></i> Live Demo
          </a>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { repos, allRepos } from './repos.js';
import JsSearch from 'js-search';

let languages = [
  "All Languages"
];

let apis = [
  "All APIs",
  "Viewer",
  "Design Automation",
  "Model Derivative",
  "Data Management"
]

let sort = [
  'Most Popular', 'Last Updated', 'Alphabetical'
];

for (let repo of repos) {
  // get list of languages
  let language = repo.language;
  if (!!language && languages.indexOf(language) === -1) {
    languages.push(language);
  }
}

export default {
  // pass these to the page
  data () {
    return {
      repos : repos,
      languages : languages, // used in filter by language
      filterLanguage: "All Languages",
      apis : apis, // used in filter by api used
      filterAPI: "All APIs",
      sort : sort,
      sortValue: "Last Updated",
      allReposCount: allRepos.length
    }
  },

  methods: {
    sortBy: (value) => {
      switch (value) {
        case 'Most Popular': {
            repos.sort((a, b) => {
              return b.stargazers_count - a.stargazers_count;
            });
          break;
        }
        case 'Last Updated': {
          repos.sort((a,b) => {
            return b.updated_at.localeCompare(a.updated_at);
          });
          break;
        }
        case 'Alphabetical': {
          repos.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        }
        default: {
          break;
        }
      }
    },
    filter: (api, language) => {
      repos.splice(0, repos.length);
      repos.push(...allRepos);
      let results = [...repos];

      // api search is fuzzier
      if (api !== apis[0]) {
        let repoSearch = new JsSearch.Search('id');
        repoSearch.addIndex('name');
        repoSearch.addDocuments(results);
        results = repoSearch.search(api);
      }
      if (language !== languages[0]) {
        let search = new JsSearch.Search('id');
        search.indexStrategy = new JsSearch.ExactWordIndexStrategy();
        search.addIndex('language');
        search.addDocuments(results);
        results = search.search(language);
      }
      repos.splice(0, repos.length);
      repos.push(...results);
    }
  }
}
</script>

<style>
* {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.filterbutton, .filterbutton:hover, .filterbutton:active, .filterbutton:visited {
  height:25px;
  background-color: #ffffff !important;
  color: #333333 !important;
  border: #3566cc !important;
  height: 33px !important;
  padding-left: 11px !important;
  padding-right: 11px !important;
}

.repo-card {
  color: #666666;
  background: #fff;
  border: 1px solid #EBEFF0;
  border-radius: 1px;
  display: inline-block;
  height: 20rem;
  margin: 2rem;
  position: relative;
  width: 345px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  vertical-align: top;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
}

.card-title{
  color: #3566cc;
  padding-bottom: 1rem;
}

.card-footer {
  width: 100%;
  padding: none;
  position: absolute;
  bottom: 10px;
}

.dropdown {
  display: inline-block;
}

.repo-card-info-item{
  padding-right: 10px;
  color: #8b8b8b;
}

.repo-card-footer{
 color: #EE8822 !important;
}

.repo-card:hover {
  box-shadow: 0px 0px 10px 0px #cacaca;
  border: 1px solid #3566CC;
}

</style>
