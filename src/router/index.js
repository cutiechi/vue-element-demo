import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import User from '../pages/User'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new Router({
  routes
})

export default router
