<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <RouterLink to="/">
  <img src="/bandcampnegro.png" alt="Bandcamp" class="logo-img" />
</RouterLink>
      </div>
      <ul class="nav-links" :class="{ active: menuAbierto }">
        <li><RouterLink to="/" @click="cerrarMenu">Inicio</RouterLink></li>
        <li><RouterLink to="/logos" @click="cerrarMenu">Logos</RouterLink></li>
        <li><RouterLink to="/tipografia" @click="cerrarMenu">Tipografía</RouterLink></li>
        <li><RouterLink to="/dosDonts" @click="cerrarMenu">Do's & Don'ts</RouterLink></li>
      </ul>
      <button class="nav-toggle" @click="toggleMenu" aria-label="Menú">
        <span class="burger" :class="{ open: menuAbierto }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuAbierto = ref(false)
function toggleMenu() { menuAbierto.value = !menuAbierto.value }
function cerrarMenu() { menuAbierto.value = false }
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #E5E5E5;
  z-index: 1000;
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-img {
  height: 32px;
  display: block;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}
.nav-links a {
  font-weight: 500;
  color: #666;
  transition: color 0.3s ease;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: #000;
}
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}
.burger, .burger::before, .burger::after {
  display: block;
  width: 22px;
  height: 2px;
  background: #000;
  transition: 0.3s ease;
}
.burger { position: relative; }
.burger::before, .burger::after {
  content: '';
  position: absolute;
  left: 0;
}
.burger::before { top: -7px; }
.burger::after { top: 7px; }
.burger.open { background: transparent; }
.burger.open::before { transform: rotate(45deg); top: 0; }
.burger.open::after { transform: rotate(-45deg); top: 0; }
@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%; left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
    border-bottom: 1px solid #E5E5E5;
  }
  .nav-links.active { display: flex; }
  .nav-toggle { display: block; }
}
</style>