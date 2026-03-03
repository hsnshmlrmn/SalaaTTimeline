<script setup>
import { ref, onMounted } from 'vue'
import DayTimeline from './components/DayTimeline.vue'
import PrayerMarkers from './components/PrayerMarkers.vue'
import { computePrayerTimes } from './utils/prayerCalc'
import { buildSegments, buildMarkers } from './utils/timeUtils'

const segments = ref([])
const markers = ref([])
const vertical = ref(window.innerWidth < 600)

window.addEventListener('resize', () => {
  vertical.value = window.innerWidth < 600
})

onMounted(() => {
  // TEMP: use fixed coordinates so layout is stable
  const coords = { lat: 10.5, lng: -61.4 }

  const times = computePrayerTimes(coords)
  segments.value = buildSegments(times)
  markers.value = buildMarkers(times)
})
</script>

<template>
  <h1>SalaaT Timeline</h1>

  <div class="timeline-wrapper">
    <DayTimeline :segments="segments" :vertical="vertical" />
    <PrayerMarkers :markers="markers" :vertical="vertical" />
  </div>
</template>

<style>
.timeline-wrapper {
  position: relative;
  margin-top: 40px;
  padding: 0 10px;
}
</style>
