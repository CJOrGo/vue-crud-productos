import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue' // Asegúrate de tener esta vista o crearla
import ProductosView from '../views/ProductosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
    },
    {
      path: '/productos',
      name: 'productos',
      component: ProductosView,
    },
    {
      path: '/productos/crear',
      name: 'crear-producto',
      // Carga perezosa para optimizar
      component: () => import('../views/CrearProductoView.vue'),
    },
    {
      path: '/productos/editar/:id',
      name: 'editar-producto',
      component: () => import('../views/EditarProductoView.vue'),
      props: true, // Permite pasar el ID como prop a la vista
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue'),
    },
  ],
})

export default router
