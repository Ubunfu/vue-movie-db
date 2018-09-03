import Vue from 'vue'
import App from './App.vue'

// Import the Router so I can use it.
import router from './router';

Vue.config.productionTip = false

// Render the App
// Use the router I've imported from above for the site
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
