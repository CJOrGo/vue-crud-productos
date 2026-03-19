<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductoStore } from '@/stores/useProductoStore'

const store = useProductoStore()
const route = useRoute() // Para leer el ID de la URL
const router = useRouter()

const productoParaEditar = ref({ nombre: '', precio: 0 })

onMounted(() => {
  // Obtenemos el ID que viene en la URL (ej. /productos/editar/1)
  const id = route.params.id
  const encontrado = store.obtenerProductoPorId(id)

  if (encontrado) {
    productoParaEditar.value = { ...encontrado }
  } else {
    alert('Producto no encontrado')
    router.push('/productos')
  }
})

const actualizar = () => {
  store.actualizarProducto(Number(route.params.id), { ...productoParaEditar.value })
  alert('Producto actualizado')
  router.push('/productos')
}
</script>

<template>
  <div class="container">
    <h2>Editar Producto</h2>
    <form @submit.prevent="actualizar" class="form-box">
      <div class="group">
        <label>Nombre:</label>
        <input v-model="productoParaEditar.nombre" type="text" required />
      </div>
      <div class="group">
        <label>Precio:</label>
        <input v-model.number="productoParaEditar.precio" type="number" required />
      </div>
      <button type="submit" class="btn-update">Actualizar Cambios</button>
      <button type="button" @click="router.push('/productos')">Cancelar</button>
    </form>
  </div>
</template>
<!--

<style scoped>
.container { padding: 20px; }
.form-box { max-width: 400px; background: #fff3cd; padding: 20px; border-radius: 5px; }
.group { margin-bottom: 10px; display: flex; flex-direction: column; }
.btn-update { background: blue; color: white; margin-right: 10px; cursor: pointer; }
</style>
-->
<style scoped>

/* CONTENEDOR */
.container {
  padding: 40px;
  display: flex;
  justify-content: center;
}

/* CAJA FORM */
.form-box {
  width: 350px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 20px 10px 30px rgba(0,0,0,0.4);
  margin-top: 100px;
  margin-left: -10%;
}

/* TITULO */
h2 {
  text-align: center;
  margin-bottom: 20px;
  padding-left: -30%;
}

/* GRUPOS */
.group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

/* LABEL */
label {
  margin-bottom: 5px;
  font-weight: bold;
}

/* INPUTS */
input {
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.1);
  color: white;
}

/* PLACEHOLDER */
input::placeholder {
  color: #ccc;
}

/* BOTONES */
button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

/* BOTON ACTUALIZAR */
.btn-update {
  background: linear-gradient(45deg, #a855f7, #22d3ee);
  color: white;
}

/* BOTON CANCELAR */
button[type="button"] {
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  color: white;
}

/* HOVER */
button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

</style>