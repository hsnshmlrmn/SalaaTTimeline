export function toMinutes(d) {
  return d.getHours() * 60 + d.getMinutes()
}

export function buildSegments(times) {
  const { fajr, sunrise, dhuhr, asr, maghrib, isha } = times

  const nextFajr = new Date(fajr)
  nextFajr.setDate(nextFajr.getDate() + 1)

  const total = Math.max(1, toMinutes(nextFajr) - toMinutes(fajr))

  function seg(id, start, end, colorStart, colorEnd) {
    return {
      id,
      width: ((toMinutes(end) - toMinutes(start)) / total) * 100,
      colorStart,
      colorEnd
    }
  }

  return [
    seg('fajr-sunrise', fajr, sunrise, '#0B1D51', '#FFB56B'),
    seg('sunrise-dhuhr', sunrise, dhuhr, '#FFB56B', '#87CEEB'),
    seg('dhuhr-asr', dhuhr, asr, '#87CEEB', '#F2C57C'),
    seg('asr-maghrib', asr, maghrib, '#F2C57C', '#D1495B'),
    seg('maghrib-isha', maghrib, isha, '#D1495B', '#1B1B3A'),
    seg('isha-nextFajr', isha, nextFajr, '#1B1B3A', '#0A0F2C')
  ]
}
