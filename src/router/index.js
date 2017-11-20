import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import CalcPage from '@/components/CalcPage'

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
    },
    {
      path: '/calc',
      component: CalcPage
    }
  ]
})
