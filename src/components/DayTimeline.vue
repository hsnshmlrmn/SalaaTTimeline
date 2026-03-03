<script setup>
defineProps({
  segments: Array
})
</script>

<template>
  <div class="timeline">
    <div
      v-for="seg in segments"
      :key="seg.id"
      class="segment"
      :style="{
        width: seg.width + '%',
        background: `linear-gradient(to right, ${seg.colorStart}, ${seg.colorEnd})`
      }"
    ></div>
  </div>
</template>

<style>
.timeline {
  display: flex;
  height: 100px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.segment {
  height: 100%;
}
</style>
