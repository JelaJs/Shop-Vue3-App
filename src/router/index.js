import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import PageNotFound from '../views/NotFound404.vue'

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
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: PageNotFound
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})
export default router
