<script setup>
import { ref, onMounted } from 'vue'
import DayTimeline from './components/DayTimeline.vue'
import PrayerMarkers from './components/PrayerMarkers.vue'
import { computePrayerTimes } from './utils/prayerCalc'
import { buildSegments, buildMarkers } from './utils/timeUtils'

const segments = ref([])
const markers = ref([])

onMounted(() => {
  const coords = { lat: 10.5, lng: -61.4 }

  const times = computePrayerTimes(coords)

  console.log('Prayer times:', times)

  segments.value = buildSegments(times)
  markers.value = buildMarkers(times)

  console.log('Segments:', segments.value)
  console.log('Markers:', markers.value)
})
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
