import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: () => import('../views/ClavierView.vue')
    },
    {
      path:'/call',
      name:'call',
      component: () => import('../views/CallView.vue')
    },
    {
      path:'/new-contact',
      name:'new-contact',
      component: () => import('../views/NewContactView.vue')
    }
  ]
})

export default router
