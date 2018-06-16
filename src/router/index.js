import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'

import SignUp from '@/components/Admin/SignUp'
import LogIn from '@/components/Admin/LogIn'

import Posts from '@/components/View/Posts'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts
    },
  ]
})
