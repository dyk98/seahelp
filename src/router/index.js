import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Background from '@/components/common/background'
import leftTab from '@/components/common/leftTab'

Vue.component('Background',Background)
Vue.component('left-tab',leftTab)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
