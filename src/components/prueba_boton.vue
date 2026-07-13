<template>
  <button 
    :class="[
      'btn-base',
      `btn-${variante}`,
      { 'btn-pequeno': tamano === 'pequeno' },
      { 'btn-grande': tamano === 'grande' },
      { 'btn-bloque': bloque }
    ]"
    :disabled="deshabilitado"
    @click="manejarClick"
  >
    <span v-if="icono" class="btn-icono">{{ icono }}</span>
    <span class="btn-texto">{{ texto }}</span>
  </button>
</template>