<script setup>
defineProps({
  markers: Array,
  vertical: Boolean
})
</script>

<template>
  <div class="markers" :class="{ vertical }">
    <div
      v-for="m in markers"
      :key="m.name"
      class="marker"
      :class="{ vertical }"
      :style="vertical
        ? { top: m.position + '%' }
        : { left: m.position + '%' }"
    >
      {{ m.name }}
    </div>
  </div>
</template>

<style>
.markers {
  position: relative;
  height: 0;
}

.markers.vertical {
  height: 100%;
  width: 0;
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

.marker.vertical {
  left: -10px;
  top: auto;
  transform: translateY(-50%);
}
</style>
