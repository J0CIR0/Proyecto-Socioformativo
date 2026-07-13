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
<script setup>
defineProps({
  texto: {
    type: String,
    default: 'Botón'
  },
  variante: {
    type: String,
    default: 'primario',
    validator: (valor) => {
      return ['primario', 'secundario', 'exito', 'peligro', 'advertencia', 'info', 'claro', 'oscuro'].includes(valor)
    }
  },
  tamano: {
    type: String,
    default: 'mediano',
    validator: (valor) => ['pequeno', 'mediano', 'grande'].includes(valor)
  },
  bloque: {
    type: Boolean,
    default: false
  },
  deshabilitado: {
    type: Boolean,
    default: false
  },
  icono: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['click'])
const manejarClick = (evento) => {
  if (!deshabilitado) {
    emit('click', evento)
  }
}
</script>