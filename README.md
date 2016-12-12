# Autodesk Developer GitHub Repos

This is a collection of all samples found on Autodesk Developer website. It takes the response body (in `src/repos.json`) of GET https://api.github.com/orgs/Autodesk-Forge/repos and present them in the page. 

## Setup
``` bash
npm install
```

## Develop

``` bash
# serve with hot reload at localhost:8080
npm run dev
```
Built with webpack + vue.js. All source files in `src` folder, compiled into `dist` folder.
The cards on the page are defined in src/Cards.vue. 

## Build

``` bash
# build for production with minification
npm run build
```
