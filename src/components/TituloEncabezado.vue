<template>
  <div class="titulo-encabezado">
    <h1>{{ titulo }}</h1>
    <p>{{ encabezado }}</p>
  </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  encabezado: {
    type: String,
    default: 'Descripción del encabezado'
  }
})
</script>

<style scoped>
.titulo-encabezado {
  background-color: #1a2a4a;
  color: white;
  padding: 30px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
}

.titulo-encabezado h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.titulo-encabezado p {
  margin: 8px 0 0 0;
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}
</style>