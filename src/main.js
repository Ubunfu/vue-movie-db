import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'

// Import the Router so I can use it.
import router from './router';

// Export an event bus to pass events and data between components
export const bus = new Vue();

Vue.config.productionTip = false

// Render the App
// Use the router I've imported from above for the site
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
