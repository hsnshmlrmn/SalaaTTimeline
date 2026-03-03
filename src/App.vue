<script setup>
import { ref, onMounted } from 'vue'
import DayTimeline from './components/DayTimeline.vue'
import PrayerMarkers from './components/PrayerMarkers.vue'

const segments = ref([])
const markers = ref([])

onMounted(() => {
  const coords = { lat: 10.5, lng: -61.4 } // Trinidad fallback

  const times = computePrayerTimes(coords)

  console.log('Prayer times:', times)

  segments.value = buildSegments(times)
  markers.value = buildMarkers(times)

  console.log('Segments:', segments.value)
  console.log('Markers:', markers.value)
})

  segments.value = [
    { id: 'fajr-sunrise', width: w(fajr, sunrise), colorStart: '#0B1D51', colorEnd: '#FFB56B', type: 'prayer' },
    { id: 'sunrise-ishraq', width: w(sunrise, sunrise + 15), colorStart: '#FFB56B', colorEnd: '#FFE9A0', type: 'forbidden' },
    { id: 'ishraq-duha', width: w(sunrise + 15, 9 * 60), colorStart: '#FFE9A0', colorEnd: '#87CEEB', type: 'prayer' },
    { id: 'duha-zawwal', width: w(9 * 60, dhuhr - 10), colorStart: '#87CEEB', colorEnd: '#4AA3DF', type: 'forbidden' },
    { id: 'zawwal-dhuhr', width: w(dhuhr - 10, dhuhr), colorStart: '#4AA3DF', colorEnd: '#4AA3DF', type: 'prayer' },
    { id: 'dhuhr-asr', width: w(dhuhr, asr), colorStart: '#4AA3DF', colorEnd: '#F2C57C', type: 'prayer' },
    { id: 'asr-maghrib', width: w(asr, maghrib), colorStart: '#F2C57C', colorEnd: '#D1495B', type: 'prayer' },
    { id: 'maghrib-isha', width: w(maghrib, isha), colorStart: '#D1495B', colorEnd: '#1B1B3A', type: 'prayer' },
    { id: 'isha-nextFajr', width: w(isha, nextFajr), colorStart: '#1B1B3A', colorEnd: '#0A0F2C', type: 'prayer' }
  ]

  function pos(mins) {
    return ((mins - fajr) / total) * 100
  }

  markers.value = [
    { name: 'Fajr', position: pos(fajr) },
    { name: 'Sunrise', position: pos(sunrise) },
    { name: 'Dhuhr', position: pos(dhuhr) },
    { name: 'Asr', position: pos(asr) },
    { name: 'Maghrib', position: pos(maghrib) },
    { name: 'Isha', position: pos(isha) }
  ]
}))
</script>

<template>
  <h1>SalaaTTimeline</h1>

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




