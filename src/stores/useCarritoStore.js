import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', () => {
  // State: Productos añadidos al carrito
  const carrito = ref([])

  // Actions

  // Agrega un producto al carrito
  const agregarAlCarrito = (producto) => {
    carrito.value.push({ ...producto, cartId: Date.now() })
  }

  // Elimina un producto específico del carrito por su ID
  const eliminarDelCarrito = (cartId) => {
    carrito.value = carrito.value.filter((item) => item.cartId !== cartId)
  }

  // Vacía completamente el carrito
  const vaciarCarrito = () => {
    carrito.value = []
  }

  // Getters: Cálculos automáticos

  // Cantidad total de productos
  const totalArticulos = computed(() => carrito.value.length)

  // Suma total de los precios
  const totalPrecio = computed(() => {
    return carrito.value.reduce((acc, item) => acc + item.precio, 0)
  })

  return {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
    totalArticulos,
    totalPrecio,
  }
})
