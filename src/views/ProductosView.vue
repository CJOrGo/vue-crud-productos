<script setup>
import { useProductoStore } from '@/stores/useProductoStore.js'
import { useCarritoStore } from '@/stores/useCarritoStore.js'

// Accedemos a los stores
const productoStore = useProductoStore()
const carritoStore = useCarritoStore()

// Funciones de acción
const eliminar = (id) => {
  if (confirm('¿Estás seguro de eliminar este producto?')) {
    productoStore.eliminarProducto(id)
  }
}

const agregarAlCarrito = (producto) => {
  carritoStore.agregarAlCarrito(producto)
  alert(`${producto.nombre} añadido al carrito`)
}
</script>

<template>
  <div class="container">
    <h2>Lista de Productos</h2>

    <p v-if="productoStore.productos.length === 0">No hay productos disponibles.</p>

    <table v-else border="1" cellpadding="10" style="width: 100%; border-collapse: collapse">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productoStore.productos" :key="producto.id">
          <td>{{ producto.nombre }}</td>
          <td>${{ producto.precio }}</td>
          <td>
            <router-link :to="`/productos/editar/${producto.id}`">
              <button>Editar</button>
            </router-link>

            <button @click="eliminar(producto.id)" style="color: red">Eliminar</button>

            <button @click="agregarAlCarrito(producto)" style="color: green">
              Añadir al carrito
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <br />
    <router-link to="/productos/crear">
      <button>Registrar Nuevo Producto</button>
    </router-link>
  </div>
</template>

<style scoped>
/* Estilo muy básico por ahora */
.container {
  padding: 20px;
}
button {
  margin-right: 5px;
  cursor: pointer;
}
</style>
