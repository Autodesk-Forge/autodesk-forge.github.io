<template>
<div class="maxwidth forge-navbar">
  <ul>
    <li id="logo"><a href="http://developer.autodesk.com"><img src="/img/Autodesk-Forge-2lines.svg" height="29"/></a>
    </li>
    <li class="dropdown">
      <a href="" class="dropdown-title no-click">APIs <i class="fa fa-angle-down" aria-hidden="true"></i></a>
      <div class="dropdown-content api-dropdown">
        <div class="api-dropdown-col">
          <h4 class="api-dropdown-header">General Availability</h4>
          <a v-for="api in generalAvailableAPIs" :href="api.link">{{ api.name }}</a>
        </div>
        <div class="api-dropdown-col">
          <h4 class="api-dropdown-header">Beta</h4>
          <a v-for="api in betaAPIs" :href="api.link">{{ api.name }}</a>
        </div>
      </div>
    </li>
    <li><a href="https://developer.autodesk.com/en/pricing">Pricing</a></li>
    <li class="dropdown">
      <a href="" class="dropdown-title no-click">Resources <i class="fa fa-angle-down" aria-hidden="true"></i></a>
      <div class="dropdown-content">
        <a v-for="(link, resource) in resources" :href="link">{{ resource }}</a>
      </div>
    </li>
    <li class="right"><a href="https://github.com/Autodesk-Forge"><i class="fa fa-github"></i> GitHub</a></li>
    <li class="right search">
      <form><input id="search">
      </form>
    </li>
  </ul>
</div>
</template>

<script>
const resources = {
  "Get Help" : "https://developer.autodesk.com/en/support/get-help",
  "API Status" : "https://developer.autodesk.com/en/support/api-status",
  "Blog": "http://adndevblog.typepad.com/cloud_and_mobile/"
}
const generalAvailableAPIs = [
  {
    name: "Authentication (OAuth)",
    link: "https://developer.autodesk.com/en/docs/oauth/v2/overview/"
  },
  {
    name: "Data Management API",
    link: "https://developer.autodesk.com/en/docs/data/v2/overview/"
  },
  {
    name: "Design Automation API",
    link: "https://developer.autodesk.com/en/docs/design-automation/v2/overview/"
  },
  {
    name: "Model Derivative API",
    link: "https://developer.autodesk.com/en/docs/model-derivative/v2/overview/"
  },
  {
    name: "Authentication (OAuth)",
    link: "https://developer.autodesk.com/en/docs/viewer/v2/overview/"
  }
]
const betaAPIs = [
  {
    name: "BIM 360 API",
    link: "https://developer.autodesk.com/en/docs/bim360/v1/overview/"
  },
  {
    name: "Reality Capture API",
    link: "https://developer.autodesk.com/en/docs/reality-capture/v1/overview/"
  }
]

export default {
  data () {
    return {
      resources: resources,
      generalAvailableAPIs: generalAvailableAPIs,
      betaAPIs: betaAPIs
    }
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
  padding-top: 20px;
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
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-title {
  margin-bottom: 10px;
}
.forge-navbar {
  list-style: none;
  margin: 0 auto;
  padding-top: 5px;
  min-height: 54px;
  background-color: white;
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
#logo {
  padding-top: 13px;
}
@media (max-width: 740px) {
  ul li {
    display: block;
  }
  li.right {
    float: none;
  }
}
</style>
