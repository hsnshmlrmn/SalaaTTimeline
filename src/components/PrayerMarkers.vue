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
        : { left: m.position + '%' }
      "
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

.markers.vertical {
  height: 100%;
  width: 0;
}

.marker {
  position: absolute;
  transform: translateX(-50%);
}

.marker.vertical {
  left: -10px;
  transform: translateY(-50%);
}
</style>
