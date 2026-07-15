<!--pie de pagina de melissa-->
<script setup>
defineProps({
  texto: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <footer class="pie">
    <p>{{ texto }}</p>
  </footer>
</template>

<style scoped>
.pie {
  margin-top: 40px;
  padding: 20px;
  background: #1f2937;
  color: white;
  text-align: center;
}

.pie p {
  margin: 0;
}
</style>