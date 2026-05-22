<template>
  <div class="page">

    <section class="hero">
      <div class="hero-content">
        <h1>Tipografía</h1>
        <p>La tipografía es un elemento clave de la identidad de Bandcamp. Estas son las normas de uso para garantizar coherencia visual.</p>
      </div>
    </section>

    <section class="seccion">
      <h2 class="seccion-titulo">Fuente Principal</h2>
      <p class="seccion-desc">Bandcamp usa una tipografía sans-serif bold como base de su identidad.</p>
      <div class="tipo-demo">
        <div class="tipo-bloque">
          <p class="muestra-grande">Aa</p>
          <p class="tipo-nombre">Bold — Peso principal</p>
        </div>
        <div class="tipo-bloque">
          <p class="muestra-grande ligera">Aa</p>
          <p class="tipo-nombre">Regular — Texto corrido</p>
        </div>
      </div>
    </section>

    <section class="seccion gris">
      <h2 class="seccion-titulo">Escala Tipográfica</h2>
      <p class="seccion-desc">Jerarquía visual clara para títulos, subtítulos y cuerpo de texto.</p>
      <div class="tipo-imagenes">
  <img src="/tipobandcamp.png" alt="Tipografía Bandcamp" class="tipo-img" />
  <img src="/tipobandcamp2.png" alt="Tipografía Bandcamp 2" class="tipo-img" />
  <img src="/tipobandcamp3.png" alt="Tipografía Bandcamp 3" class="tipo-img" />
  <img src="/tipobandcamp4.png" alt="Tipografía Bandcamp 4" class="tipo-img" />
  <img src="/tipobandcamp5.png" alt="Tipografía Bandcamp 5" class="tipo-img" />
  <img src="/tipobandcamp6.png" alt="Tipografía Bandcamp 6" class="tipo-img" />
</div>
    </section>

    <section class="seccion">
      <h2 class="seccion-titulo">Normas de Uso</h2>
      <div class="normas-grid">
        <div v-for="norma in normas" :key="norma.titulo" class="norma-item" :class="norma.tipo">
          <span class="norma-badge" :class="norma.tipo">{{ norma.tipo === 'correcto' ? '✓' : '✗' }}</span>
          <p>{{ norma.titulo }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorSwatch from '../components/ColorSwatch.vue'



var normas = ref([
  { tipo: 'correcto',   titulo: 'Usar la fuente en sus pesos oficiales (regular y bold).' },
  { tipo: 'correcto',   titulo: 'Mantener el interlineado generoso para facilitar la lectura.' },
  { tipo: 'correcto',   titulo: 'Respetar la jerarquía tipográfica en títulos y cuerpo.' },
  { tipo: 'incorrecto', titulo: 'No usar cursiva ni decoraciones en el logotipo.' },
  { tipo: 'incorrecto', titulo: 'No mezclar la fuente con tipografías decorativas.' },
  { tipo: 'incorrecto', titulo: 'No reducir el texto por debajo de 12px en digital.' }
])
</script>

<style scoped>
.page { padding-top: 72px; }

.hero {
  background: linear-gradient(to bottom, #000 60%, #1A1A1A 100%);
  padding: 6rem 2rem 4rem;
  text-align: center;
}
.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #E0FF00;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.1rem;
  color: #CFCFCF;
  max-width: 580px;
  margin: 0 auto;
}
.seccion {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
}
.seccion.gris {
  background: #F8F8F8;
  max-width: 100%;
  padding: 5rem 2rem;
}
.seccion-titulo {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}
.seccion-desc { text-align: center; color: #666; margin-bottom: 3rem; }

.tipo-demo {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.tipo-bloque { text-align: center; }
.muestra-grande {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  color: #000;
}
.muestra-grande.ligera { font-weight: 400; }
.tipo-nombre { font-size: 0.9rem; color: #666; margin-top: 1rem; }

.tipo-imagenes {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.tipo-img {
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.normas-grid {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}
.norma-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 0.95rem;
}
.norma-item.correcto   { background: #f0fdf4; border: 1px solid #bbf7d0; }
.norma-item.incorrecto { background: #fff1f2; border: 1px solid #fecdd3; }
.norma-badge { font-weight: 800; font-size: 1rem; flex-shrink: 0; }
.norma-badge.correcto   { color: #166534; }
.norma-badge.incorrecto { color: #9f1239; }
</style>