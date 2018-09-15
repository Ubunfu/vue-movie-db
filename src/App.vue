<template>
  <div id="app">
    <Header :title="title" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data() {
    return {
      isTrue: true,
      title: 'Movie Database'
    }
  },
  components: { 
    Header,
    Footer
  }
}
</script>

<style>
#app {
  /* Style of default text throughout the entire app */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-align: center;
  color: #fff; 
}
</style>
