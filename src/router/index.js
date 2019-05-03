import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import develop from '@/components/develop'
import register from '@/components/register'
import other from '@/components/other'
import home from '@/components/home'
import mainBody from '@/components/mainBody'
import eventsGallery from '@/components/eventsGallery'
import addActivity from '@/components/addActivity'
import showActivity from '@/components/showActivity'
import updateImage from '@/components/updateImage'
import eventsList from '@/components/eventsList'
import announcementList from '@/components/announcementList'
import personalInf from '@/components/personalInf'

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
            },
            {
              path: '/eventsGallery',
              name: 'eventsGallery',
              component: eventsGallery
            },
            {
              path: '/addActivity',
              name: 'addActivity',
              component: addActivity
            },
            {
              path: '/showActivity',
              name: 'showActivity',
              component: showActivity
            },
            {
              path: '/updateImage',
              name: 'updateImage',
              component: updateImage
            },
            {
              path: '/eventsList',
              name: 'eventsList',
              component: eventsList
            },
            {
              path: '/announcementList',
              name: 'announcementList',
              component: announcementList
            },
            {
              path: '/personalInf',
              name: 'personalInf',
              component: personalInf
            }
          ]
        }
      ]
    }
  ]
})
