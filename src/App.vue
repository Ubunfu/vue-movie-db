<template>
  <div id="app">
    <!-- <Header v-bind:title="title" /> -->
    <Header :title="title" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MoviesList />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MoviesList from './components/MoviesList.vue'

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
    MoviesList
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
  margin-top: 60px;
}
</style>
