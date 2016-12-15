<template>
    <div id="cards" class="forge-body">
        <div class="forge-top-banner">
            <h1>Forge is Autodesk's API Platform</h1>
            <p>The Forge platform unlocks the functionality in Autodesk products that have been serving industries such
                as architecture, engineering, construction, manufacturing, media, and others.</p>
        </div>
        <div class="forge-top-filter">
            <span style="display:inline-block;">
                Showing {{repos.length}} repo(s)
                <div class="dropdown" style="display:inline-block;">
                    <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
                        Sort <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click="sortByAlphabetical">Alphabetical</a></li>
                        <li><a href="#" @click="sortByPopularity">Most Popular</a></li>
                        <li><a href="#" @click="sortByLastUpdated">Last updated</a></li>
                    </ul>
                </div>
                <div class="dropdown" style="display:inline-block;">
                    <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
                        Language <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li v-for="(repo, language) in languages"><a href="#" @click="filterByLanguage(language)">{{ language }}</a></li>
                    </ul>
                </div>
                <div class="dropdown" style="display:inline-block;">
                    <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
                        API <span class="caret"></span></button>
                    <ul class="dropdown-menu">
                        <li v-for="(repo, api) in apis"><a href="#" @click="filterByAPIUsed(api)">{{ api }}</a></li>
                    </ul>
                </div>
            </span>
        </div>
        <a v-for="repo in repos" v-bind:href="repo.html_url">
            <div class="repo-card forge-title">
                <!--<div style="position: absolute; top: 0; right: 0;">
                        <a v-show="repo.homepage" v-bind:href="repo.homepage"><img src="img/demo.png" /></a></div>-->
                <div class="card-info">
                  <h3>{{ repo.name }}</h3>
                  <p>{{ repo.description }}</p>
                </div>
                <div class="card-footer">
                    <!-- This is redundant <span><a v-bind:href="repo.html_url"><i class="fa fa-github" aria-hidden="true"></i> Source Code</a></span>-->

                    <!-- need to implement this blogpost feature... not sure how-->
                    <a v-show="repo.homepage" v-bind:href="repo.homepage" target="_blank"><span
                            class="repo-card-footer-blogpost"><i class="fa fa-desktop" aria-hidden="true"></i> Live Demo</span></a>
                    <!--<a v-show="repo.blogpost" v-bind:href="repo.blogpost" target="_blank"><span class="repo-card-footer-blogpost"><i class="fa fa-file-text-o" aria-hidden="true"></i> Blog post</span></a>-->
                    <span class="repo-card-footer-item"><i class="fa fa-star" aria-hidden="true"></i> {{ repo.stargazers_count }}</span>
                    <span class="repo-card-footer-item"><i class="fa fa-code-fork" aria-hidden="true"></i> {{ repo.forks_count }}</span>
                    <span class="repo-card-footer-language"><i class="fa fa-code" aria-hidden="true"></i> {{ repo.language }}</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
import reposJSON from './repos.json';

let repos = [];
let languages = {
  // language: [list of repos]
  all : []
};

let apis = {
  all : [],
  "Viewer" : [],
  "Design Automation" : [],
  "Model Derivative" : [],
  "Data Management" : []
} // enum list of apis with Autodesk

for (let repo of reposJSON) {
  // put repos in a list
  repos.push(repo);

  // map language -> repo
  let language = repo.language;
  if (language !== null) {
    if (!languages[language]) {
      languages[language] = [];
    }
    languages[language].push(repo);
  }

  // map api -> repo
  // reg match api with the name of repo
  let viewerreg = /[vV]iewer/g,
      dareg = /[dD]esign.[aA]utomation/g,
      mdreg = /[mM]odel.[dD]erivative/g,
      dmreg = /[dD]ata.[mM]anagement/g;
  // can match multiple apis per repo
  if (repo.name.match(viewerreg)) {
    apis["Viewer"].push(repo);
  }
  if (repo.name.match(dareg)) {
    apis["Design Automation"].push(repo);
  }
  if (repo.name.match(mdreg)) {
    apis["Model Derivative"].push(repo);
  }
  if (repo.name.match(dmreg)) {
    apis["Data Management"].push(repo);
  }
}

languages.all.push(...repos);
apis.all.push(...repos);

export default {
  // pass these to the page
  data () {
    return {
      repos : repos,
      languages : languages, // used in filter by language
      apis : apis // used in filter by api used
    }
  },

  methods: {
    sortByPopularity: () => {
      repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      });
    },
    sortByAlphabetical: () => {
      repos.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    },
    sortByLastUpdated: () => {
      repos.sort((a,b) => {
        return b.updated_at.localeCompare(a.updated_at);
      });
    },
    filterByLanguage: (language) => {
      repos.splice(0, repos.length);
      repos.push(...languages[language]);
    },
    filterByAPIUsed: (apiName) => {
      repos.splice(0, repos.length);
      repos.push(...apis[apiName]);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
body {
  text-align: center;
  height: 100%;
}

.filterbutton, .filterbutton:hover, .filterbutton:active, .filterbutton:visited {
  height:25px;
  background-color: #3566cc !important;
  border: #3566cc !important;
}

.repo-card {
  color: #404040;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 1px;
  display: inline-block;
  height: 20rem;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  vertical-align: top;
}
.repo-card .card-info {
  padding-left: 1rem;
  padding-right: 1rem;
}
.repo-card .card-footer {
  position: 
  absolute; 
  bottom: 10px; 
  width: 100%;
  padding: none;
}

.repo-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


</style>
