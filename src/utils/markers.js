import { toMinutes } from './segments'

export function buildMarkers(times) {
  const base = toMinutes(times.fajr)

  const nextFajr = new Date(times.fajr)
  nextFajr.setDate(nextFajr.getDate() + 1)

  const total = Math.max(1, toMinutes(nextFajr) - base)

  const entries = [
    ['Fajr', times.fajr],
    ['Sunrise', times.sunrise],
    ['Dhuhr', times.dhuhr],
    ['Asr', times.asr],
    ['Maghrib', times.maghrib],
    ['Isha', times.isha]
  ]

  return entries.map(([name, t]) => ({
    name,
    position: ((toMinutes(t) - base) / total) * 100
  }))
}
