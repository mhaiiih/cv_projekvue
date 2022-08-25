import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PersonalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: HomeView
    },
    {
      path: '/skil',
      name: 'skil',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/skilView.vue')
    }
  ]
})

export default router
