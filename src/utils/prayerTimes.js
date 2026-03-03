import { PrayerTimes, CalculationMethod, Madhab } from 'adhan'

function safe(d) {
  return d instanceof Date && !isNaN(d) ? d : new Date()
}

export function getPrayerTimes(lat, lng) {
  const date = new Date()

  const params = CalculationMethod.MuslimWorldLeague()
  params.madhab = Madhab.Shafi

  const times = new PrayerTimes({ latitude: lat, longitude: lng }, date, params)

  return {
    fajr: safe(times.fajr),
    sunrise: safe(times.sunrise),
    dhuhr: safe(times.dhuhr),
    asr: safe(times.asr),
    maghrib: safe(times.maghrib),
    isha: safe(times.isha)
  }
}
