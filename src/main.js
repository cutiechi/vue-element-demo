import Vue from 'vue'
import App from './App'
import {
  Row,
  Button,
  Dialog,
  Form,
  FormItem,
  Input
} from 'element-ui'

import router from './router'
import store from './store'

Vue.use(Row)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
