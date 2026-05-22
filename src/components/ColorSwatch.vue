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