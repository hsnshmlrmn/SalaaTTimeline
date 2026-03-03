<script setup>
defineProps({
  markers: Array
})
</script>

<template>
  <div class="marker" :style="{ left: m.position + '%' }">
  <div class="label">{{ m.name }}</div>
  <div class="time">{{ m.time }}</div>
</div>
</template>

<style>
.markers {
  position: relative;
  height: 0;
}

.marker {
  position: absolute;
  top: -25px;
  transform: translateX(-50%);
  background: white;
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
</style>

