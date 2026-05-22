<template>
  <div class="color-swatch">
    <div class="swatch-preview" :style="{ backgroundColor: hex }"></div>
    <span class="swatch-nombre">{{ nombre }}</span>
    <span class="swatch-hex">{{ hex }}</span>
  </div>
</template>

<script setup>
defineProps({
  hex:    { type: String, required: true },
  nombre: { type: String, required: true }
})
</script>

<style scoped>
.color-swatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.swatch-preview {
  width: 120px;
  height: 120px;
  border-radius: 18px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.swatch-nombre {
  font-size: 0.85rem;
  font-weight: 600;
  color: #1A1A1A;
}
.swatch-hex {
  font-family: monospace;
  font-size: 0.8rem;
  color: #666;
  letter-spacing: 0.5px;
}
</style>