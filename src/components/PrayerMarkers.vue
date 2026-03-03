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
      {{ m.name }}
    </div>
  </div>
</template>

<style>
.markers {
  position: relative;
  height: 0;
  width: 100%;
}

.marker {
  position: absolute;
  top: -25px;
  transform: translateX(-50%);
  background: white;
  padding: 4px 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
</style>
