<template>
  <div id="app">
    <!-- <Header v-bind:title="title" /> -->
    <Header :title="title" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello!" v-if="isTrue == true"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      isTrue: true,
      title: 'Movie Database'
    }
  },
  components: {
    HelloWorld,
    Header
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
