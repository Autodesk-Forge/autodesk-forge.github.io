import Vue from 'vue';
import Cards from './Cards.vue';
require('bootstrap-loader');
import './styles/main.less';

new Vue({
  el: '#cards',
  render: h => h(Cards)
});
