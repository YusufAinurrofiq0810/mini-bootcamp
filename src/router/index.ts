import { createRouter, createWebHistory } from 'vue-router'
import generatedRouters from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts(generatedRouters)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
