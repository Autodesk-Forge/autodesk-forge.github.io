# Autodesk Developer GitHub Repos

This is a collection of all samples found on Autodesk Developer website. It requires to manually take the response body of GET https://api.github.com/orgs/Autodesk-Forge/repos?type=public&page=1 (follow responder Links header for subsequent pages) and update at in `src/repos.json`.  

## Setup
``` bash
npm install
```

## Develop

``` bash
# serve with hot reload at localhost:3000
npm run dev
```
Built with webpack + vue.js. All source files in `src` folder, compiled into `dist` folder.
The cards on the page are defined in src/Cards.vue. 

## Build

``` bash
# build for production with minification
npm run build
```
