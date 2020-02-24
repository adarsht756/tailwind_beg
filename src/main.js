import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';

Vue.component('v-dashboard', require('./components/dashboardComponent').default);
Vue.component('v-carousel', require('./components/carouselComponent').default);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
