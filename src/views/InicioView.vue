<template>
  <div class="home">

    <div class="card-home">
      <h1>📌 Tercer proyecto Unidad 3 - SPA con CRUD y Pinia en Vue 3 </h1>

      <p class="subtitle">
        Desarrollar una Single Page Application (SPA) con Vue 3 que implemente un CRUD de productos, gestionando el estado global mediante Pinia y 
        utilizando Vue Router para la navegación entre vistas
      </p>

      <div class="info">
        <p><strong>Materia:</strong> Programación Web</p>
        <p><strong>Docente:</strong> Jorge Octavio Guzmán Sánchez</p>
        <p><strong>Integrantes:</strong></p>
        <ul>
          <li>Wendy Paola Bautista González</li>
          <li>Samuel Ruíz Rafael</li>
          <li>Carlos Joás Orozco González</li>
        </ul>

        <p><strong>Fecha:</strong> 18/03/2026</p>
      </div>

    </div>

  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

/* TARJETA PRINCIPAL */
.card-home {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 40px;
  width: 950px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

/* TITULO */
h1 {
  margin-bottom: 10px;
}

/* SUBTITULO */
.subtitle {
  font-size: 14px;
  color: #00f7ff;
  margin-bottom: 20px;
}

/* INFO */
.info {
  text-align: left;
  margin-top: 15px;
}

ul {
  padding-left: 20px;
}

/* BOTON */
.btn-inicio {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background: linear-gradient(45deg, #a855f7, #22d3ee);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  transition: 0.3s;
}

.btn-inicio:hover {
  transform: scale(1.05);
}
</style>