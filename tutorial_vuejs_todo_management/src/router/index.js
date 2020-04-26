import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CountUp from '@/components/CountUp'

Vue.use(Router)

export default new Router({
  mode: 'history', // Vue.jsのURLに含まれる#を取り除きたい
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/count_up',
      name: 'CountUp',
      component: CountUp
    }
  ]
})
