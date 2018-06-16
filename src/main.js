// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*
*   Apollo相關擴展包實現與GraphQL服務端的交互
*/
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'


Vue.config.productionTip = false


const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'http://apidemo.test/graphql'
})

// create apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// install vue plugin
Vue.use(VueApollo)


/* Create A Provider */
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
