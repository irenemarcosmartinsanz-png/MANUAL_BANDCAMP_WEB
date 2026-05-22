<template>
  <article class="brand-card">
    <div class="card-icon">
      <span>{{ icono }}</span>
    </div>
    <h3>{{ titulo }}</h3>
    <p>{{ descripcion }}</p>
  </article>
</template>

<script setup>
defineProps({
  icono:       { type: String, required: true },
  titulo:      { type: String, required: true },
  descripcion: { type: String, required: true },
  enlace:      { type: String, default: '' }
})
</script>