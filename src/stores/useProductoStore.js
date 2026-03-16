import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductoStore = defineStore('producto', () => {
  // State: Arreglo con 5 productos precargados
  const productos = ref([
    { id: 1, nombre: 'Laptop Gamer', precio: 25000 },
    { id: 2, nombre: 'Monitor 27"', precio: 4500 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 1200 },
    { id: 4, nombre: 'Mouse Inalámbrico', precio: 800 },
    { id: 5, nombre: 'Audífonos Pro', precio: 2500 },
  ])

  // Actions: Lógica de manejo de datos

  // Agregar un nuevo producto
  const crearProducto = (producto) => {
    productos.value.push({
      ...producto,
      id: Date.now(), // Genera un ID único basado en el tiempo
    })
  }

  // Actualizar un producto existente
  const actualizarProducto = (id, productoActualizado) => {
    const index = productos.value.findIndex((p) => p.id === id)
    if (index !== -1) {
      productos.value[index] = { ...productoActualizado, id }
    }
  }

  // Eliminar un producto del arreglo
  const eliminarProducto = (id) => {
    productos.value = productos.value.filter((p) => p.id !== id)
  }

  // Getters (Opcional): Obtener un producto específico por ID
  const obtenerProductoPorId = (id) => {
    return productos.value.find((p) => p.id === parseInt(id))
  }

  return {
    productos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    obtenerProductoPorId,
  }
})
