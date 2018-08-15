<template>
  <div id="app">

    <nav class="navbar is-dark">

      <div class="navbar-brand">

        <router-link class="navbar-item" to="/">GraphQL Blog</router-link>

        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Articles</router-link>
        </div>

        <!-- Navbar-Right -->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">

              <p class="control">
                <router-link class="button is-primary" to="/logIn" v-if="!isLogin">LOGIN</router-link>
              </p>

              <p class="control">
                <button class="button is-primary" @click="logout" v-if="isLogin">LOGOUT</button>
              </p>

              <p class="control">
                <router-link class="button is-primary" to="/signup" v-if="!isLogin">REGISTRATION</router-link>
              </p>

            </div>
          </div>
        </div>
        <!-- End Navbar-Right -->


      </div>
    </nav>
    <!-- End Navbar -->

    <router-view/>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'App',

    data() {
      return {
        isAuthorization:false
      }
    },

    mounted: {
      CheckIsAuth(){
        if (localStorage.getItem('blog-app-token') != 0) {
          return this.isAuthorization == true;
        } else {
          return this.isAuthorization == false;
        }
      }
    },

    methods: {
      logout() {
        this.$apollo.mutate({
            mutation: gql `mutation logout($Authorization : String!){
                logout(Authorization: $Authorization)
              }`,
            variables: {
              Authorization: localStorage.getItem('blog-app-token')
            }
          })
          .then(response => {
            this.isAuthorization == false
            this.$router.replace('/')
          })
      },

    }
  }

</script>

<style>


</style>
