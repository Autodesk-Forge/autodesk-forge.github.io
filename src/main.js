import Vue from 'vue';
import Cards from './Cards.vue';
import './styles/main.less';
require('bootstrap-loader');

new Vue({
  el: '#cards',
  render: h => h(Cards)
});
