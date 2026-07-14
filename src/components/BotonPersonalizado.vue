<template>
    <div class="tarjeta">
        <h3>{{ titulo }}</h3>
        <p>{{ descripcion }}</p>
    </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    default: 'Título
  },
  descripcion: {
    type: String,
    default: 'Descripción'
  }
})
</script>

<style scoped>
    .tarjeta {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        width: 250px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    h3 {
        margin-bottom: 10px;
    }
</style>