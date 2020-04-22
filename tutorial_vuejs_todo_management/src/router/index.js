import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPractice from '@/components/FirstPractice'

Vue.use(Router)

export default new Router({
  mode: 'history', //Vue.jsのURLに含まれる#を取り除きたい
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/practice',
      name: 'FirstPractice',
      component: FirstPractice
    }
  ]
})
