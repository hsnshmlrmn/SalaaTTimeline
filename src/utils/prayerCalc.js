import { PrayerTimes, CalculationMethod, Madhab } from 'adhan'

export function computePrayerTimes({ lat, lng }) {
  const date = new Date()
  const params = CalculationMethod.MuslimWorldLeague()
  params.madhab = Madhab.Shafi

  const times = new PrayerTimes({ latitude: lat, longitude: lng }, date, params)

  const hanafiParams = CalculationMethod.MuslimWorldLeague()
  hanafiParams.madhab = Madhab.Hanafi
  const hanafiTimes = new PrayerTimes({ latitude: lat, longitude: lng }, date, hanafiParams)

  return {
    fajr: times.fajr,
    sunrise: times.sunrise,
    dhuhr: times.dhuhr,
    asrEarly: times.asr,
    asrLate: hanafiTimes.asr,
    maghrib: times.maghrib,
    isha: times.isha
  }
}
