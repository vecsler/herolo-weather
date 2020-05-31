import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from './plugins/vuetify';
import '@babel/polyfill'
const moment = require('moment');
Vue.prototype.moment = moment




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
