<template>
  <div class="page">

    <!-- Hero -->
    <section class="hero">
     
      <div class="hero-content">
        <p class="hero-label">Manual de Marca</p>
        <h1 class="hero-title">Bandcamp</h1>
        <p class="hero-sub">
          Guía oficial de identidad visual. Todo lo que necesitas saber para usar
          la marca Bandcamp de forma correcta y coherente.
        </p>
        <div class="hero-btns">
          <RouterLink to="/tipografia" class="btn btn-primary">Explorar manual</RouterLink>
        </div>
      </div>
      
    </section>

    <!-- Secciones del manual -->
    <section class="seccion">
      <h2 class="seccion-titulo">¿Qué encontrarás aquí?</h2>
      <p class="seccion-desc">
        Este manual recoge todas las normas de uso de la identidad visual de Bandcamp.
      </p>
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

    <!-- Colores de marca -->
    <section class="seccion gris">
      <h2 class="seccion-titulo">Paleta de color oficial</h2>
      <p class="seccion-desc">Los colores que definen Bandcamp. Sin variaciones ni aproximaciones.</p>
      <div class="colores-row">
        <div
          v-for="c in colores"
          :key="c.hex"
          class="color-chip"
          :style="{ background: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }"
        >
          <span class="chip-nombre" :class="{ oscuro: c.hex === '#E0FF00' || c.hex === '#FFFFFF' }">
            {{ c.nombre }}
          </span>
          <span class="chip-hex" :class="{ oscuro: c.hex === '#E0FF00' || c.hex === '#FFFFFF' }">
            {{ c.hex }}
          </span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import BrandCard from '../components/BrandCard.vue'

var secciones = ref([
  {
    icono: 'fa-font',
    titulo: 'Tipografía',
    descripcion: 'Fuentes, pesos, escalas tipográficas y normas de uso del texto en la marca Bandcamp.',
    enlace: '/tipografia'
  },
  {
    icono: 'fa-image',
    titulo: 'Logos',
    descripcion: 'Versiones del logotipo, espacio de seguridad y normas de aplicación sobre distintos fondos.',
    enlace: '/logos'
  },
  {
    icono: 'fa-check-circle',
    titulo: "Do's & Don'ts",
    descripcion: 'Ejemplos visuales de cómo usar correctamente el logo, los colores y la identidad de marca.',
    enlace: '/dosDonts'
  }
])

var colores = ref([
  { hex: '#000000', nombre: 'Negro' },
  { hex: '#FFFFFF', nombre: 'Blanco' },
  { hex: '#E0FF00', nombre: 'Lima' },
  { hex: '#3D38F5', nombre: 'Azul' },
  { hex: '#CFCFCF', nombre: 'Gris' }
])
</script>

<style scoped>
.page { padding-top: 72px; }

/* ---- Hero ---- */
.hero {
  min-height: 90vh;
  background: url('/bandcamp_movimiento.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}

/* Formas flotantes de fondo */
.hero-shapes { position: absolute; inset: 0; pointer-events: none; }
.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.12;
  animation: flotar 6s ease-in-out infinite;
}
.shape1 { width: 320px; height: 320px; background: #000; top: -80px; right: 8%; animation-delay: 0s; }
.shape2 { width: 180px; height: 180px; background: #3D38F5; bottom: 8%; left: 4%; animation-delay: 2s; }
.shape3 { width: 120px; height: 120px; background: #000; top: 35%; left: 48%; animation-delay: 4s; }

@keyframes flotar {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-22px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  background: #E0FF00;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 50%;
}

.hero-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
}
.hero-title {
  font-size: clamp(4rem, 10vw, 7rem);
  font-weight: 900;
  color: #000;
  line-height: 1;
  margin-bottom: 1.5rem;
}
.hero-sub {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.65);
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
  text-decoration: none;
}
.btn-primary { background: #000; color: #E0FF00; }
.btn-primary:hover { opacity: 0.8; }
.btn-outline { background: transparent; color: #000; border: 2px solid #000; }
.btn-outline:hover { background: #000; color: #E0FF00; }

.hero-logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.hero-logo-circle {
  width: 260px; height: 260px;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}
.hero-logo-letra {
  font-size: 10rem;
  font-weight: 900;
  color: #E0FF00;
  line-height: 1;
  margin-top: 0.1em;
}

/* ---- Secciones ---- */
.seccion {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}
.seccion.gris {
  background: #f5f5f5;
  max-width: 100%;
  padding: 5rem 2rem;
}
.seccion-titulo {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: #000;
}
.seccion-desc {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 3rem;
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* ---- Paleta home ---- */
.colores-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}
.color-chip {
  width: 160px;
  height: 160px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  gap: 0.2rem;
}
.chip-nombre { font-size: 0.85rem; font-weight: 700; color: white; }
.chip-hex { font-family: monospace; font-size: 0.75rem; color: rgba(255,255,255,0.7); }
.chip-nombre.oscuro, .chip-hex.oscuro { color: #000; }
.chip-hex.oscuro { color: rgba(0,0,0,0.5); }

@media (max-width: 768px) {
  .hero { flex-direction: column; text-align: center; min-height: auto; }
  .hero-sub { margin: 0 auto 2.5rem; }
  .hero-btns { justify-content: center; }
  .hero-logo-circle { width: 180px; height: 180px; }
  .hero-logo-letra { font-size: 7rem; }
}
</style>
