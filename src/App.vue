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

<style>
nav {
  background: linear-gradient(90deg, #6a0dad, #00cfff);
  padding: 15px;
  display: flex;
  gap: 100px;
  justify-content: center;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>