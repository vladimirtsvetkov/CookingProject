<template>
  <div id="app">
    <navbar></navbar>
    <footer></footer>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Search,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
