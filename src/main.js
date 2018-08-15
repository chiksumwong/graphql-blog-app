// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bulma/css/bulma.css'


/*
*   Apollo相關擴展包實現與GraphQL服務端的交互
*/
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'


/*  "用戶認證頭信息"  與   "其他請求信息"  一起發送到發布文章界面，以便可以成功發布新文章。 
    我們可以使用 apollo-link-context 輕鬆實現此功能。 
*/

import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
    // 從 LocalStorage 中獲取認證  token （如果存在的話）
    const token = localStorage.getItem('blog-app-token')

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null
        }
    }
})


Vue.config.productionTip = false


const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'http://graphql-api.test/graphql'
})

// Create apollo client 
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// install vue plugin
Vue.use(VueApollo)


/* Create A Provider */
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})


/* vuex */
import store from './store'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
