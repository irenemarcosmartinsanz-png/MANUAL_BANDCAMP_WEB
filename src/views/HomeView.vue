<template>
  <div class="page">

    <section class="hero">
      <div class="hero-content">
        <p class="hero-label">Manual de Marca</p>
        <h1 class="hero-title">Bandcamp</h1>
        <p class="hero-sub">
          Guía oficial de identidad visual. Todo lo que necesitas saber
          para usar la marca Bandcamp de forma correcta y coherente.
        </p>
        <div class="hero-btns">
          <RouterLink to="/logos" class="btn btn-primary">Explorar manual</RouterLink>
          <a href="https://bandcamp.com" target="_blank" class="btn btn-outline">Ir a Bandcamp</a>
        </div>
      </div>
      <div class="hero-logo-wrap">
        <div class="hero-logo-circle">
          <span class="hero-logo-letra">b</span>
        </div>
      </div>
    </section>

    <section class="seccion">
      <h2 class="seccion-titulo">¿Qué encontrarás aquí?</h2>
      <p class="seccion-desc">Este manual recoge todas las normas de uso de la identidad visual de Bandcamp.</p>
      <div class="cards-grid">
        <BrandCard
          v-for="card in secciones"
          :key="card.titulo"
          :icono="card.icono"
          :titulo="card.titulo"
          :descripcion="card.descripcion"
          :enlace="card.enlace"
        />
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import BrandCard from '../components/BrandCard.vue'

var secciones = ref([
  {
    icono: '🖼️',
    titulo: 'Logos',
    descripcion: 'Versiones del logotipo, espacio de seguridad y normas de aplicación.',
    enlace: '/logos'
  },
  {
    icono: '🔤',
    titulo: 'Tipografía',
    descripcion: 'Fuentes, pesos, escalas tipográficas y normas de uso del texto.',
    enlace: '/tipografia'
  },
  {
    icono: '✅',
    titulo: "Do's & Don'ts",
    descripcion: 'Ejemplos de cómo usar correctamente el logo y la identidad de marca.',
    enlace: '/dosDonts'
  }
])
</script>

<style scoped>
.page { padding-top: 72px; }

.hero {
  min-height: 90vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;
  flex-wrap: wrap;
}
.hero-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #E0FF00;
  margin-bottom: 1rem;
}
.hero-title {
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 900;
  color: white;
  line-height: 1;
  margin-bottom: 1.5rem;
}
.hero-sub {
  font-size: 1.1rem;
  color: #CFCFCF;
  max-width: 480px;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}
.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn {
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: 0.3s ease;
  display: inline-block;
}
.btn-primary { background: #E0FF00; color: #000; }
.btn-primary:hover { opacity: 0.85; }
.btn-outline { background: transparent; color: white; border: 2px solid white; }
.btn-outline:hover { background: white; color: #000; }

.hero-logo-circle {
  width: 260px; height: 260px;
  border-radius: 50%;
  background: #E0FF00;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-logo-letra {
  font-size: 10rem;
  font-weight: 900;
  color: #000;
  line-height: 1;
}

.seccion {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}
.seccion-titulo {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
}
.seccion-desc {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .hero { flex-direction: column; text-align: center; min-height: auto; }
  .hero-btns { justify-content: center; }
  .hero-logo-circle { width: 180px; height: 180px; }
  .hero-logo-letra { font-size: 7rem; }
}
</style>