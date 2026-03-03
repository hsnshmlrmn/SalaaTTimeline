import { PrayerTimes, CalculationMethod, Madhab } from 'adhan'

function safeDate(d) {
  return d instanceof Date && !isNaN(d) ? d : new Date()
}

export function computePrayerTimes({ lat, lng }) {
  const date = new Date()

  const params = CalculationMethod.MuslimWorldLeague()
  params.madhab = Madhab.Shafi

  const times = new PrayerTimes({ latitude: lat, longitude: lng }, date, params)

  const hanafiParams = CalculationMethod.MuslimWorldLeague()
  hanafiParams.madhab = Madhab.Hanafi
  const hanafiTimes = new PrayerTimes({ latitude: lat, longitude: lng }, date, hanafiParams)

  return {
    fajr: safeDate(times.fajr),
    sunrise: safeDate(times.sunrise),
    dhuhr: safeDate(times.dhuhr),
    asrEarly: safeDate(times.asr),
    asrLate: safeDate(hanafiTimes.asr),
    maghrib: safeDate(times.maghrib),
    isha: safeDate(times.isha)
  }
}
