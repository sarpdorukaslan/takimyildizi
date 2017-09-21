<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<style scoped>
  @import "assets/css/clean-blog.min.css";

  #app {

  }
</style>
