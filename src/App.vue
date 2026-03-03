<script setup>
import { ref, onMounted } from 'vue'
import DayTimeline from './components/DayTimeline.vue'
import PrayerMarkers from './components/PrayerMarkers.vue'
import { getPrayerTimes } from './utils/prayerTimes'
import { buildSegments } from './utils/segments'
import { buildMarkers } from './utils/markers'

const segments = ref([])
const markers = ref([])

onMounted(() => {
  const coords = { lat: 10.5, lng: -61.4 } // Trinidad

  const times = getPrayerTimes(coords.lat, coords.lng)

  segments.value = buildSegments(times)
  markers.value = buildMarkers(times)
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

