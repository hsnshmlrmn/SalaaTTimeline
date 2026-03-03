<script setup>
import DayTimeline from './components/DayTimeline.vue'
import PrayerMarkers from './components/PrayerMarkers.vue'

const segments = [
  { id: 'seg1', width: 30, colorStart: '#0B1D51', colorEnd: '#FFB56B' },
  { id: 'seg2', width: 40, colorStart: '#FFB56B', colorEnd: '#87CEEB' },
  { id: 'seg3', width: 30, colorStart: '#87CEEB', colorEnd: '#1B1B3A' }
]

const markers = [
  { name: 'A', position: 10 },
  { name: 'B', position: 50 },
  { name: 'C', position: 85 }
]
</script>

<template>
  <h1>SalaaT Timeline</h1>

  <div class="timeline-wrapper">
    <DayTimeline :segments="segments" />
    <PrayerMarkers :markers="markers" />
  </div>
</template>

<style>
.timeline-wrapper {
  position: relative;
  margin-top: 40px;
  padding: 0 10px;
}
</style>
