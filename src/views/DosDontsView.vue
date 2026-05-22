<template>
  <div class="page">

    <section class="hero">
      <div class="hero-content">
        <h1>Do's & Don'ts</h1>
        <p>Ejemplos de uso correcto e incorrecto de la marca Bandcamp.</p>
      </div>
    </section>

    <section class="seccion">
      <h2 class="seccion-titulo verde">✅ Do's — Qué sí hacer</h2>
      <div class="ejemplos-grid">
        <div v-for="item in dos" :key="item.titulo" class="ejemplo correcto">
          <div class="ejemplo-icono">{{ item.icono }}</div>
          <div class="ejemplo-texto">
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span class="badge correcto-badge">✓ Correcto</span>
        </div>
      </div>
    </section>

    <section class="seccion gris">
      <h2 class="seccion-titulo rojo">❌ Don'ts — Qué no hacer</h2>
      <div class="ejemplos-grid">
        <div v-for="item in donts" :key="item.titulo" class="ejemplo incorrecto">
          <div class="ejemplo-icono">{{ item.icono }}</div>
          <div class="ejemplo-texto">
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <span class="badge incorrecto-badge">✗ Incorrecto</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ColorSwatch from '../components/ColorSwatch.vue'

var dos = ref([
  { icono: '✔️', titulo: 'Usa el logo original', desc: 'Utiliza siempre los archivos oficiales sin modificaciones.' },
  { icono: '🎨', titulo: 'Respeta los colores', desc: 'Usa únicamente negro, blanco, lima y azul.' },
  { icono: '🔤', titulo: 'Mantén la tipografía', desc: 'Utiliza las fuentes aprobadas en todos los textos.' },
  { icono: '📐', titulo: 'Respeta el espacio', desc: 'Deja siempre el margen mínimo alrededor del logo.' }
])

var donts = ref([
  { icono: '💧', titulo: 'No cambies los colores', desc: 'No apliques degradados ni filtros sobre el logotipo.' },
  { icono: '↔️', titulo: 'No distorsiones el logo', desc: 'No estires ni deformes el logo en ningún sentido.' },
  { icono: '🚫', titulo: 'No uses fondos conflictivos', desc: 'Evita fondos con patrones que reduzcan la legibilidad.' },
  { icono: '✏️', titulo: 'No uses otras tipografías', desc: 'No sustituyas la tipografía por fuentes no aprobadas.' }
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
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}
.seccion-titulo.verde { color: #1a7a3c; }
.seccion-titulo.rojo  { color: #b91c1c; }
.ejemplos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
.ejemplo {
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease;
}
.ejemplo:hover { transform: translateY(-4px); }
.ejemplo.correcto   { background: #f0fdf4; border: 2px solid #bbf7d0; }
.ejemplo.incorrecto { background: #fff1f2; border: 2px solid #fecdd3; }
.ejemplo-icono {
  width: 50px; height: 50px;
  border-radius: 12px;
  background: #E0FF00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}
.ejemplo-texto h3 { font-size: 1rem; font-weight: 700; }
.ejemplo-texto p  { font-size: 0.9rem; color: #666; }
.badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  align-self: flex-start;
}
.correcto-badge   { background: #bbf7d0; color: #166534; }
.incorrecto-badge { background: #fecdd3; color: #9f1239; }
</style>