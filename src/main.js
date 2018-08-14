// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import App from './App'
import router from './router'
import './mock/mock'
import store from './store'
import { Button } from 'mint-ui';
Vue.component('mt-button', Button);
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
