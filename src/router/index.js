import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import develop from '@/components/develop'
import register from '@/components/register'
import other from '@/components/other'
import home from '@/components/home'
import mainBody from '@/components/mainBody'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/develop',
      name: 'develop',
      component: develop,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/mainBody',
          name: 'mainBody',
          component: mainBody,
          children: [
            {
              path: '/register',
              name: 'register',
              component: register
            },
            {
              path: '/other',
              name: 'other',
              component: other
            }
          ]
        }
      ]
    }
  ]
})
