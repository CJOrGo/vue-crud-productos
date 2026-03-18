<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Inicio</RouterLink> | <RouterLink to="/productos">Productos</RouterLink> |
      <RouterLink to="/carrito">Carrito</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  padding: 20px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
