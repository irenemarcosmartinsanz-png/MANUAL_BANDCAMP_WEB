<template>
  <article class="brand-card">
    <div class="card-icon">
      <i :class="['fas', icono]"></i>
    </div>
    <h3>{{ titulo }}</h3>
    <RouterLink v-if="enlace" :to="enlace" class="ver-mas">Ver más</RouterLink>
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
<style scoped>
.brand-card {
  background: white;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.brand-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.14);
}
.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: #E0FF00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}
.brand-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #000;
}
.brand-card p {
  color: #666;
  font-size: 0.95rem;
}
.ver-mas {
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease;
}
.ver-mas:hover {
  color: #3D38F5;
}
</style>