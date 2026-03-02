<script setup>
defineProps({
  markers: Array
})
</script>

<template>
  <div class="markers">
    <div
      v-for="m in markers"
      :key="m.name"
      class="marker"
      :style="{ left: m.position + '%' }"
    >
      <span class="label">{{ m.name }}</span>
    </div>
  </div>
</template>

<style>
.markers {
  position: relative;
  height: 0;
}

.marker {
  position: absolute;
  top: -28px;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: 600;
  background: white;
  padding: 3px 6px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  white-space: nowrap;
}

/* Mobile: smaller labels, more spacing, allow wrapping */
@media (max-width: 600px) {
  .marker {
    top: -34px;
    font-size: 0.7rem;
    padding: 2px 5px;
    white-space: normal;
    text-align: center;
    max-width: 60px;
    line-height: 1.1;
  }
}
</style>
