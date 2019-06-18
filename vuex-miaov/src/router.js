import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',  //设置自定义选中类名
  mode:'history',  //去掉#
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: '/',
          name: 'work',
          component: () => import('./views/about/Work.vue')
        },
        {
          path: 'study',
          name: 'study',
          component: () => import('./views/about/Study.vue')
        },
        {
          path: 'hobby',
          name: 'hobby',
          component: () => import('./views/about/Hobby.vue')
        }
      ]
    },
    {
      path: '/document',
      name: 'document',
      component: () => import('./views/Document.vue')
    }
  ]
})
