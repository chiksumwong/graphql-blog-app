import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/Home'

import SignUp from '@/components/Admin/SignUp'
import LogIn from '@/components/Admin/LogIn'

import Users from '@/components/Admin/Users'
import UserDetail from '@/components/Admin/UserDetail'

import Posts from '@/components/Admin/Posts'
import PostDetail from '@/components/PostDetail'
import AddPost from '@/components/Admin/AddPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    {
      path: '/admin/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/admin/users/:id',
      name: 'UserDetail',
      component: UserDetail,
      props: true
    },
    {
      path: '/admin/posts/new',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/posts/:id',
      name: 'PostDetail',
      component: PostDetail,
      props: true
    },
    
  ]
})
