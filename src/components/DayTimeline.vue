<script setup>
defineProps({
  segments: Array,
  vertical: Boolean
})
</script>

<template>
  <div class="timeline" :class="{ vertical }">
    <div
      v-for="seg in segments"
      :key="seg.id"
      class="segment"
      :class="{ vertical }"
      :style="vertical
        ? {
            height: seg.width + '%',
            background: `linear-gradient(to bottom, ${seg.colorStart}, ${seg.colorEnd})`,
            opacity: seg.type === 'forbidden' ? 0.45 : 1
          }
        : {
            width: seg.width + '%',
            background: `linear-gradient(to right, ${seg.colorStart}, ${seg.colorEnd})`,
            opacity: seg.type === 'forbidden' ? 0.45 : 1
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

.timeline.vertical {
  flex-direction: column;
  width: 100%;
  height: 500px;
}

.segment {
  height: 100%;
}

.segment.vertical {
  width: 100%;
  height: auto;
}
</style>
