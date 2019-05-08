import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contents from './views/Contents.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          name: 'contents',
          component: () => import(/* webpackChunkName: "about" */ './components/ContentDefault.vue')
        },
        {
          path: ':lang',
          name: 'contents-child',
          component: () => import(/* webpackChunkName: "about" */ './components/ContentsChild.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: () => import(/* webpackChunkName: "youtube" */ './views/Youtube.vue')
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
