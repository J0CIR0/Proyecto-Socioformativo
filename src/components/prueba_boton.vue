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
<style scoped>
.btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  user-select: none;
  min-height: 44px;
}
.btn-base:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
.btn-primario {
  background-color: #4a6cf7;
  color: white;
}
.btn-primario:hover:not(:disabled) {
  background-color: #3a56d4;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 108, 247, 0.3);
}
.btn-secundario {
  background-color: #e9ecf1;
  color: #1e293b;
}
.btn-secundario:hover:not(:disabled) {
  background-color: #d5dae3;
  transform: translateY(-2px);
}
.btn-exito {
  background-color: #22c55e;
  color: white;
}
.btn-exito:hover:not(:disabled) {
  background-color: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}
.btn-peligro {
  background-color: #ef4444;
  color: white;
}
.btn-peligro:hover:not(:disabled) {
  background-color: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
.btn-advertencia {
  background-color: #f59e0b;
  color: white;
}
.btn-advertencia:hover:not(:disabled) {
  background-color: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
.btn-info {
  background-color: #06b6d4;
  color: white;
}
.btn-info:hover:not(:disabled) {
  background-color: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
}
.btn-claro {
  background-color: #f8fafc;
  color: #1e293b;
  border: 1px solid #e2e8f0;
}
.btn-claro:hover:not(:disabled) {
  background-color: #e2e8f0;
  transform: translateY(-2px);
}
.btn-oscuro {
  background-color: #1e293b;
  color: white;
}
.btn-oscuro:hover:not(:disabled) {
  background-color: #0f172a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 41, 59, 0.3);
}
.btn-pequeno {
  padding: 6px 14px;
  font-size: 0.8rem;
  min-height: 34px;
}
.btn-mediano {
  padding: 10px 20px;
  font-size: 0.95rem;
  min-height: 44px;
}
.btn-grande {
  padding: 14px 28px;
  font-size: 1.1rem;
  min-height: 54px;
}
.btn-bloque {
  display: flex;
  width: 100%;
}
.btn-icono {
  font-size: 1.1em;
  line-height: 1;
}
</style>