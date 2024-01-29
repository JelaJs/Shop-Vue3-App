import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoriesView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: SingleProductView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})
export default router
