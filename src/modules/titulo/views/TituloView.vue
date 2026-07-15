<script setup>
import TituloEncabezado from '@/components/TituloEncabezado.vue'
</script>

<template>
  <div class="titulo-page">
    <h2>Módulo de Títulos</h2>
    <p>Esta página demuestra el uso del componente reutilizable TituloEncabezado</p>
    <div class="ejemplos">
      <TituloEncabezado 
        titulo="Bienvenido al Sistema" 
        encabezado="Esta es una demostración del componente reutilizable"
      />
      <TituloEncabezado 
        titulo="Gestión de Emprendimientos" 
        encabezado="Administra tus emprendimientos de manera eficiente"
      />
      <TituloEncabezado titulo="Título sin encabezado personalizado" />
    </div>
    <div style="margin-top: 20px;">
      <a href="/" class="link-volver">← Volver al inicio</a>
    </div>
  </div>
</template>

<style scoped>
.titulo-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
h2 {
  color: #1a2a4a;
  border-bottom: 3px solid #1a2a4a;
  padding-bottom: 10px;
}
.ejemplos {
  margin-top: 20px;
}
.link-volver {
  color: #1a2a4a;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid #1a2a4a;
  border-radius: 8px;
  transition: all 0.3s;
  display: inline-block;
}
.link-volver:hover {
  background-color: #1a2a4a;
  color: white;
}
</style>