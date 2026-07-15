import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue')
  },
  {
    path: '/titulo',
    name: 'titulo',
    component: () => import('../modules/titulo/views/TituloView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router