<template>
  <TheNavbar />
  <main>
    <RouterView />
  </main>
  <footer class="footer">
    <div class="footer-content">
      <p>© Bandcamp 2026. Todos los derechos reservados.</p>
      <div class="footer-links">
        <a href="#">Términos</a>
        <a href="#">Privacidad</a>
        <a href="#">Contacto</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
</script>

<style>
.footer {
  background: #1A1A1A;
  color: white;
  padding: 2rem;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer p { font-size: 0.875rem; color: #CFCFCF; }
.footer-links { display: flex; gap: 1.5rem; }
.footer-links a { font-size: 0.875rem; color: #CFCFCF; }
.footer-links a:hover { color: white; }
</style>