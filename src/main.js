/*
 * @Author: Vhen
 * @Date: 2020-11-13 13:25:53
 * @LastEditors: Vhen
 * @LastEditTime: 2020-12-08 18:16:39
 * @Description: 
 */
import Vue from "vue";
import Vant from 'vant';
import '@vant/touch-emulator';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { component } from 'components'
import './mock'
import { $apis } from "apis";
import http from "http";

import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(component)
Vue.use($apis)

import './icons'

import 'assets/scss/index.scss'

import {utils} from 'utils'

Vue.prototype.$utils=utils
Vue.prototype.$http=http

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
