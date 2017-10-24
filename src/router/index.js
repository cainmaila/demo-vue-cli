import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/p2',
      component: Demo,
    }
  ]
})