<template>
  <form>
    <input 
    v-model="searchText"
    @keyup="search(searchText)"
    @keyup.enter="searchGithub()"
    placeholder="Search Repos">
  </form>
</template>
<script>
import { repos, allRepos } from './repos.js';
import JsSearch from 'js-search';

let repoSearch = new JsSearch.Search('id');
repoSearch.addIndex('name');
repoSearch.addIndex('description');
repoSearch.addIndex('language');
repoSearch.addDocuments(repos);

export default {
  data () {
    return {
      searchText: ''
    };
  },
  methods: {
    search: (searchText) => {
      repos.splice(0, repos.length);
      repos.push(...allRepos);
      if (!searchText) {
        return;
      }
      let results = [];
      results = repoSearch.search(searchText);
      repos.splice(0, repos.length);
      repos.push(...results);
    }
  }
}
</script>
<style></style>