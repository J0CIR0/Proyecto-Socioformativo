<script setup>
import BaseBoton from './components/prueba_boton.vue'
</script>

<template>
  <main>
    <h1>Sistema de Gestión Emprendimientos</h1>
    <p>Proyecto de Programación Web II</p>
    
    <div style="margin-top: 30px; display: flex; gap: 12px; flex-wrap: wrap;">
      <BaseBoton texto="Primario" @click="console.log('Click')" />
      <BaseBoton texto="Éxito" variante="exito" />
      <BaseBoton texto="Peligro" variante="peligro" />
      <BaseBoton texto="Pequeño" tamano="pequeno" variante="info" />
      <BaseBoton texto="Deshab." :deshabilitado="true" variante="oscuro" />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}
h1 {
  margin-bottom: 8px;
}
</style>