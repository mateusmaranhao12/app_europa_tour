import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Cadastro from '@/components/Cadastro.vue'
import Index from '@/views/Index.vue'
import Login from '@/components/Login.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      
    ]
  },

  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
