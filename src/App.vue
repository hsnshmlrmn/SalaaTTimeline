<script setup>
const segments = [
  {
    id: 'fajr-sunrise',
    width: 20,
    colorStart: '#0B1D51',
    colorEnd: '#FFB56B',
    type: 'prayer'
  },
  {
    id: 'sunrise-ishraq',
    width: 10,
    colorStart: '#FFB56B',
    colorEnd: '#FFE9A0',
    type: 'forbidden'
  },
  {
    id: 'ishraq-duha',
    width: 20,
    colorStart: '#FFE9A0',
    colorEnd: '#87CEEB',
    type: 'prayer'
  },
  {
    id: 'duha-zawwal',
    width: 10,
    colorStart: '#87CEEB',
    colorEnd: '#4AA3DF',
    type: 'forbidden'
  },
  {
    id: 'zawwal-dhuhr',
    width: 10,
    colorStart: '#4AA3DF',
    colorEnd: '#4AA3DF',
    type: 'prayer'
  },
  {
    id: 'dhuhr-asr',
    width: 30,
    colorStart: '#4AA3DF',
    colorEnd: '#F2C57C',
    type: 'prayer'
  }
]
const markers = [
  { name: 'Fajr', position: 10 },
  { name: 'Sunrise', position: 30 },
  { name: 'Dhuhr', position: 60 }
]</script>

<template>
  <div class="timeline">
    <div
      v-for="seg in segments"
      :key="seg.id"
      class="segment"
      :style="{
        width: seg.width + '%',
        background: `linear-gradient(to right, ${seg.colorStart}, ${seg.colorEnd})`,
        opacity: seg.type === 'forbidden' ? 0.45 : 1
      }"
    ></div>
  </div>
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
.timeline {
  display: flex;
  height: 100px;
  border-radius: 12px;
  overflow: hidden;
  margin: 40px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.segment {
  height: 100%;
}
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
}</style>

