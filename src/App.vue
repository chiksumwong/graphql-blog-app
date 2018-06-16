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
                <router-link class="button is-primary" to="/logIn">LOGIN</router-link>
              </p>
              <p class="control">
                <router-link class="button is-primary" to="/signup">REGISTRATION</router-link>
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
  export default {
    name: 'App'
  }

</script>

<style>


</style>
