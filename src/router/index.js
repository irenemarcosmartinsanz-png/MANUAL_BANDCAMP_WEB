import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tipografia',
      name: 'tipografia',
      component: () => import('../views/TipografiaView.vue')
    },
    {
      path: '/logos',
      name: 'logos',
      component: () => import('../views/LogosView.vue')
    },
    {
      path: '/dosDonts',
      name: 'dosDonts',
      component: () => import('../views/DosDontsView.vue')
    }
  ]
})

export default router
