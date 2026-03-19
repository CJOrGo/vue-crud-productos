<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductoStore } from '@/stores/useProductoStore'

const store = useProductoStore()
const router = useRouter()

const nuevoProducto = ref({
  nombre: '',
  precio: 0
})

const guardar = () => {
  store.crearProducto({ ...nuevoProducto.value })
  alert('¡Producto registrado con éxito!')
  router.push('/productos') // Te regresa a la lista
}
</script>

<template>
  <div class="container">
    <h2>Registrar Nuevo Producto</h2>
    <form @submit.prevent="guardar" class="form-box">
      <div class="group">
        <label>Nombre:</label>
        <input v-model="nuevoProducto.nombre" type="text" required />
      </div>
      <div class="group">
        <label>Precio:</label>
        <input v-model.number="nuevoProducto.precio" type="number" required />
      </div>
      <button type="submit" class="btn-add">Guardar</button>
      <button type="button" @click="router.push('/productos')">Cancelar</button>
    </form>
  </div>
</template>

<!--
<style scoped>
.container { padding: 20px; }
.form-box { max-width: 400px; background: #eee; padding: 20px; border-radius: 5px; }
.group { margin-bottom: 10px; display: flex; flex-direction: column; }
.btn-add { background: green; color: white; margin-right: 10px; cursor: pointer; }
</style>
-->
<style scoped>

/* CONTENEDOR */
.container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* TITULO */
h2 {
  margin-bottom: 20px;
  text-align: center;
}

/* CAJA FORM */
.form-box {
  width: 350px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
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

/* BOTON GUARDAR */
.btn-add {
  background: linear-gradient(45deg, #7b2ff7, #00c6ff);
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