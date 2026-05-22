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
      <div class="escala">
        <div v-for="nivel in escala" :key="nivel.nombre" class="escala-item">
          <p class="escala-muestra" :style="{ fontSize: nivel.size, fontWeight: nivel.weight }">
            bandcamp.
          </p>
          <div class="escala-info">
            <span class="escala-nombre">{{ nivel.nombre }}</span>
            <span class="escala-datos">{{ nivel.size }} · {{ nivel.weight }}</span>
          </div>
        </div>
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

var escala = ref([
  { nombre: 'Título principal', size: '3rem',    weight: '800' },
  { nombre: 'Subtítulo',        size: '2rem',    weight: '700' },
  { nombre: 'Sección',          size: '1.5rem',  weight: '600' },
  { nombre: 'Cuerpo',           size: '1rem',    weight: '400' },
  { nombre: 'Texto pequeño',    size: '0.85rem', weight: '400' }
])

var normas = ref([
  { tipo: 'correcto',   titulo: 'Usar la fuente en sus pesos oficiales (regular y bold).' },
  { tipo: 'correcto',   titulo: 'Mantener el interlineado generoso para facilitar la lectura.' },
  { tipo: 'correcto',   titulo: 'Respetar la jerarquía tipográfica en títulos y cuerpo.' },
  { tipo: 'incorrecto', titulo: 'No usar cursiva ni decoraciones en el logotipo.' },
  { tipo: 'incorrecto', titulo: 'No mezclar la fuente con tipografías decorativas.' },
  { tipo: 'incorrecto', titulo: 'No reducir el texto por debajo de 12px en digital.' }
])
</script>