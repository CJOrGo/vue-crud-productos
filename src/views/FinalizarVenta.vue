<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCarritoStore } from '@/stores/useCarritoStore.js'

const carritoStore = useCarritoStore()
const router = useRouter()

// Estado para los datos del cliente
const cliente = ref({
  nombre: '',
  email: '',
  direccion: '',
  metodoPago: 'efectivo'
})

const procesarCompra = () => {
  // 1. Validar que el carrito no esté vacío
  if (carritoStore.carrito.length === 0) {
    alert('Tu carrito está vacío')
    return
  }

  // 2. Aquí simularías el envío a una API o Base de Datos
  console.log('Datos del Cliente:', cliente.value)
  console.log('Productos comprados:', carritoStore.carrito)
  console.log('Total pagado:', carritoStore.totalPrecio)

  alert(`¡Gracias ${cliente.value.nombre}! Tu compra por $${carritoStore.totalPrecio} ha sido procesada.`)

  // 3. Vaciar el carrito después de la compra
  carritoStore.vaciarCarrito()

  // 4. Redirigir al inicio o a una página de éxito
  router.push('/')
}
</script>

<template>
  <div class="checkout-container">
    <h2>Finalizar Compra</h2>

    <div class="layout">
      <form @submit.prevent="procesarCompra" class="checkout-form">
        <h3>Datos de Envío</h3>

        <div class="field">
          <label>Nombre Completo:</label>
          <input v-model="cliente.nombre" type="text" required placeholder="Juan Pérez" />
        </div>

        <div class="field">
          <label>Correo Electrónico:</label>
          <input v-model="cliente.email" type="email" required placeholder="juan@ejemplo.com" />
        </div>

        <div class="field">
          <label>Dirección:</label>
          <textarea v-model="cliente.direccion" required placeholder="Calle, Número, Colonia..."></textarea>
        </div>

        <div class="field">
          <label>Método de Pago:</label>
          <select v-model="cliente.metodoPago">
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>

        <button type="submit" class="btn-confirm">Confirmar y Pagar</button>
      </form>

      <div class="summary-card">
        <h3>Resumen</h3>
        <p>Productos: <strong>{{ carritoStore.totalArticulos }}</strong></p>
        <p class="total">Total: <strong>${{ carritoStore.totalPrecio.toLocaleString() }}</strong></p>
        <hr />
        <router-link to="/carrito">Editar carrito</router-link>
      </div>
    </div>
  </div>
</template>

<!--
<style scoped>
.checkout-container { padding: 20px; max-width: 900px; margin: 0 auto; }
.layout { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }

.checkout-form { background: #f9f9f9; padding: 25px; border-radius: 8px; border: 1px solid #ddd; }
.field { margin-bottom: 15px; display: flex; flex-direction: column; }
.field label { font-weight: bold; margin-bottom: 5px; }
input, textarea, select { padding: 10px; border: 1px solid #ccc; border-radius: 4px; }

.summary-card { background: #2c3e50; color: white; padding: 20px; border-radius: 8px; height: fit-content; }
.total { font-size: 1.4rem; color: #42b883; }

.btn-confirm {
  width: 100%; padding: 15px; background: #42b883; color: white;
  border: none; border-radius: 4px; font-size: 1.1rem; font-weight: bold; cursor: pointer;
}
.btn-confirm:hover { background: #3aa876; }

@media (max-width: 600px) {
  .layout { grid-template-columns: 1fr; }
}
</style>
-->