<template>
  <div class="page">

    <section class="hero">
      <div class="hero-content">
        <h1>Logos</h1>
        <p>Guía de uso oficial del logotipo de Bandcamp. Sigue estas normas para mantener la coherencia visual de la marca.</p>
      </div>
    </section>

    <section class="seccion">
      <h2 class="seccion-titulo">Logo Principal</h2>
      <div class="logo-demo">
        <div class="logo-caja fondo-lima">
          <span class="logo-texto negro">bandcamp</span>
        </div>
        <div class="logo-caja fondo-negro">
          <span class="logo-texto blanco">bandcamp</span>
        </div>
        <div class="logo-caja fondo-blanco">
          <span class="logo-texto negro">bandcamp</span>
        </div>
      </div>
    </section>

    <section class="seccion gris">
      <h2 class="seccion-titulo">Espacio de Seguridad</h2>
      <p class="seccion-desc">El logo debe tener siempre un margen mínimo alrededor para que respire correctamente.</p>
      <div class="espacio-demo">
        <div class="espacio-exterior">
          <div class="espacio-interior">
            <span>bandcamp</span>
          </div>
        </div>
        <p class="espacio-label">Zona de seguridad mínima: 4x alrededor del logo</p>
      </div>
    </section>

    <section class="seccion">
      <h2 class="seccion-titulo">Normas de Uso</h2>
      <div class="normas-grid">
        <div v-for="norma in normas" :key="norma.texto" class="norma-item" :class="norma.tipo">
          <span class="norma-icono">{{ norma.tipo === 'correcto' ? '✓' : '✗' }}</span>
          <p>{{ norma.texto }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

var normas = ref([
  { tipo: 'correcto', texto: 'Usa el logo en negro sobre fondos claros o blancos.' },
  { tipo: 'correcto', texto: 'Usa el logo en blanco sobre fondos oscuros o lima.' },
  { tipo: 'correcto', texto: 'Respeta siempre el espacio de seguridad alrededor del logo.' },
  { tipo: 'correcto', texto: 'Usa el logo a un mínimo de 80px de ancho en digital.' },
  { tipo: 'incorrecto', texto: 'No cambies los colores del logo por colores no aprobados.' },
  { tipo: 'incorrecto', texto: 'No estires, comprimas ni deformes el logo.' },
  { tipo: 'incorrecto', texto: 'No coloques el logo sobre fondos que reduzcan su legibilidad.' },
  { tipo: 'incorrecto', texto: 'No modifiques la tipografía ni el espaciado del logotipo.' }
])
</script>

<style scoped>
.page { padding-top: 72px; }

.hero {
  background: linear-gradient(to bottom, #E0FF00 60%, #f5f5f5 100%);
  padding: 6rem 2rem 4rem;
  text-align: center;
}
.hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #000;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.1rem;
  color: #333;
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
.seccion-desc {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
}

.logo-demo {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.logo-caja {
  width: 280px;
  height: 140px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.fondo-lima { background: #E0FF00; }
.fondo-negro { background: #000000; }
.fondo-blanco { background: #FFFFFF; border: 1px solid #E5E5E5; }
.logo-texto {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -1px;
}
.negro { color: #000; }
.blanco { color: #fff; }

.espacio-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
.espacio-exterior {
  border: 2px dashed #3D38F5;
  padding: 2.5rem;
  border-radius: 8px;
}
.espacio-interior {
  border: 2px solid #000;
  padding: 1.2rem 2.5rem;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 900;
}
.espacio-label {
  font-size: 0.85rem;
  color: #3D38F5;
  font-weight: 600;
}

.normas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}
.norma-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  font-size: 0.95rem;
}
.norma-item.correcto { background: #f0fdf4; border: 1px solid #bbf7d0; }
.norma-item.incorrecto { background: #fff1f2; border: 1px solid #fecdd3; }
.norma-icono { font-weight: 800; font-size: 1rem; flex-shrink: 0; }
.norma-item.correcto .norma-icono { color: #166534; }
.norma-item.incorrecto .norma-icono { color: #9f1239; }
</style>