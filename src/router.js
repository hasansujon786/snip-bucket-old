import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contents from './views/Contents.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contents',
      component: Contents,
      children: [
        {
          path: '/',
          name: 'contents-default',
          component: () => import(/* webpackChunkName: "contentChild" */ './components/ContentDefault.vue')
        },
        {
          path: ':lang',
          name: 'contents-child',
          component: () => import(/* webpackChunkName: "contentChild" */ './components/ContentsChild.vue'),
          props: true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/404',
      name: '404',
      component: require('./views/_404').default
    },
    // Redirect any unmatched routes to the 404 page.
    {
      path: '*',
      redirect: '404'
    }
  ]
})
