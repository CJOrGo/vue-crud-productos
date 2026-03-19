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
<!--
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
-->
<style scoped>

/* CONTENEDOR */
.container {
  padding: 30px;
}

/* TITULO */
h2 {
  margin-bottom: 20px;
  text-align: center;
}

/* TABLA */
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

/* ENCABEZADO */
thead {
  background: linear-gradient(90deg, #7b2ff7, #00c6ff);
}

th {
  padding: 15px;
  text-align: left;
  font-weight: bold;
}

/* FILAS */
td {
  padding: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

/* EFECTO HOVER */
tbody tr:hover {
  background: rgba(255,255,255,0.05);
  transform: scale(1.01);
  transition: 0.2s;
}

/* PRECIO */
td:nth-child(2) {
  color: #00f7ff;
  font-weight: bold;
}

/* BOTONES */
button {
  border: none;
  padding: 6px 10px;
  margin: 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  color: white;
}

/* EDITAR */
button:nth-child(1) {
  background: linear-gradient(45deg, #f7971e, #ffd200);
}

/* ELIMINAR */
button:nth-child(2) {
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
}

/* CARRITO */
button:nth-child(3) {
  background: linear-gradient(45deg, #00c6ff, #0072ff);
}

/* HOVER BOTONES */
button:hover {
  transform: scale(1.1);
}

/* BOTON CREAR */
.container > a button {
  margin-top: 15px;
  background: linear-gradient(45deg, #a855f7, #22d3ee);
  padding: 10px 15px;
}

/* MENSAJE VACIO */
p {
  text-align: center;
  margin-top: 20px;
}

</style>