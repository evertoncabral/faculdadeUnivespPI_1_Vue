import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Vuelidate from "vuelidate";

Vue.config.productionTip = false

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import axios from "axios";
import { Model } from "vue-api-query";
Model.$http = axios;

// Vue.use(Vuelidate);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
