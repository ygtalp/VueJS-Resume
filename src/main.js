import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
 
  Vue.use(LoadScript);



new Vue({
  el: '#app',
  render: h => h(App)
})
