import Vue from 'vue';
import Cards from './Cards.vue';
import Search from './Search.vue';
import Navbar from './Navbar.vue';
require('bootstrap-loader');
import './styles/main.less';

new Vue({
  el: '#navbar',
  render: h => h(Navbar)
});

new Vue({
  el: '#cards',
  render: h => h(Cards)
});

new Vue({
  el: '#search',
  render: h => h(Search)
});