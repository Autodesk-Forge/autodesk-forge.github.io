<template>
  <div id="cards" class="forge-body">
    <div class="forge-top-banner">
      <div class="maxwidth">
        <h1>Forge Samples and SDKs</h1>
        <p>Check out these samples, tutorials, and SDKs created to help speed up your Forge application development. Visit our <a href="http://adndevblog.typepad.com/cloud_and_mobile/" target="_blank">blog</a> for more code snippets, tips, and tricks.</p>
      </div>
    </div>
    <div class="forge-top-filter">
      <div class="maxwidth" style="padding-left:20px; padding-right:20px">
        <div style="padding-top:8px; display:inline-block;"><strong>{{repos.length}}</strong> Samples in Github</div>
        <span style="float: right; ">
                Filter by
                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
                        API <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="(repo, api) in apis"><a href="#" @click="filterByAPIUsed(api)">{{ api }}</a>
          </li>
        </ul>
      </div>
      or
      <div class="dropdown">
        <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
          Language <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="(repo, language) in languages"><a href="#" @click="filterByLanguage(language)">{{ language }}</a>
          </li>
        </ul>
      </div>
      Sort by
      <div class="dropdown">
        <button class="btn btn-info dropdown-toggle btn-xs filterbutton" type="button" data-toggle="dropdown">
          {{ sort[0] }} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="value in sort"><a href="#" @click="sortBy(value)">{{ value }}</a>
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

let sort = [
  'Most Popular', 'Last Updated', 'Alphabetical' // default is 'Most Popular'
];

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
      apis : apis, // used in filter by api used
      sort : sort
    }
  },

  methods: {
    sortBy: (value) => {
      let pos = sort.indexOf(value);
      let temp = sort[0];
      sort[0] = value;
      sort[pos] = temp;
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
