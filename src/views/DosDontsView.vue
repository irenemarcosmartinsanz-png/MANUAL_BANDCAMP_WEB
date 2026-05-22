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