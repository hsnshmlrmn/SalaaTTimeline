<script setup>
import { ref, onMounted } from 'vue'
import DayTimeline from './components/DayTimeline.vue'
import PrayerMarkers from './components/PrayerMarkers.vue'
import { computePrayerTimes } from './utils/prayerCalc'
import { buildSegments, buildMarkers } from './utils/timeUtils'

const segments = ref([])
const markers = ref([])
const isMobile = ref(window.innerWidth < 600)

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 600
})
  
async function getLocation() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      pos => resolve({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }),
      () => resolve({ lat: 10.5, lng: -61.4 }) // fallback: Trinidad
    )
  })
}

onMounted(async () => {
  const coords = await getLocation()
  const times = computePrayerTimes(coords)

  segments.value = buildSegments(times)
  markers.value = buildMarkers(times)
})
</script>

<template>
  <h1>SalaaT Timeline</h1>
  
<div class="timeline-wrapper">
  <DayTimeline :segments="segments" :vertical="isMobile" />
  <DayTimeline :segments="segments" />
  <PrayerMarkers :markers="markers" />
</div>

</template>

