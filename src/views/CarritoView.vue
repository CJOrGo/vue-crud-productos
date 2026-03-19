<script setup>
import { useRouter } from 'vue-router' // Importamos el router
import { useCarritoStore } from '@/stores/useCarritoStore.js'

const carritoStore = useCarritoStore()
const router = useRouter() // Inicializamos el router

const confirmarVaciar = () => {
  if (confirm('¿Estás seguro de que deseas vaciar todo el carrito?')) {
    carritoStore.vaciarCarrito()
  }
}

const eliminarItem = (cartId, nombre) => {
  if (confirm(`¿Eliminar ${nombre} del carrito?`)) {
    carritoStore.eliminarDelCarrito(cartId)
  }
}

// CAMBIO: Ahora esta función redirige al formulario de venta
const procederAlPago = () => {
  router.push('/finalizar-compra')
}
</script>

<template>
  <div class="carrito-container">
    <h1>🛒 Mi Carrito</h1>

    <div v-if="carritoStore.totalArticulos === 0" class="empty-cart">
      <p>Tu carrito está vacío. ¡Añade algunos productos para comenzar!</p>
      <router-link to="/productos">
        <button class="btn-primary">Ver Lista de Productos</button>
      </router-link>
    </div>

    <div v-else>
      <table class="carrito-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carritoStore.carrito" :key="item.cartId">
            <td>{{ item.nombre }}</td>
            <td>${{ item.precio.toLocaleString() }}</td>
            <td>
              <button @click="eliminarItem(item.cartId, item.nombre)" class="btn-delete">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="text-right"><strong>Total Artículos:</strong></td>
            <td colspan="2">{{ carritoStore.totalArticulos }}</td>
          </tr>
          <tr>
            <td class="text-right"><strong>Total a Pagar:</strong></td>
            <td colspan="2" class="total-price">
              ${{ carritoStore.totalPrecio.toLocaleString() }}
            </td>
          </tr>
        </tfoot>
      </table>

      <div class="actions">
        <button @click="confirmarVaciar" class="btn-clear">Vaciar Carrito</button>
        <button @click="procederAlPago" class="btn-checkout">
          Finalizar Compra
        </button>
      </div>
    </div>
  </div>
</template>

