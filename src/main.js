import Vue from 'vue'
import App from './App'
import router from './router'
import TestModal from './components/TestModal'

import '../semantic/dist/semantic.min.css'
import '../semantic/dist/semantic.min'

Vue.config.productionTip = false

Vue.component('test-modal', TestModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
