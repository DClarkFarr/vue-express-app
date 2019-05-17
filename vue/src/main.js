import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'

Vue.config.productionTip = false

var app = new Vue(App).$mount('#app')

//console.log(app);