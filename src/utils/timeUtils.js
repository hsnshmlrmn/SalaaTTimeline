export function toMinutes(date) {
  return date.getHours() * 60 + date.getMinutes()
}

function seg(id, start, end, colorStart, colorEnd, type) {
  return { id, start, end, colorStart, colorEnd, type }
}

export function buildSegments(times) {
  const { fajr, sunrise, dhuhr, asrEarly, asrLate, maghrib, isha } = times

  const ishraq = new Date(sunrise.getTime() + 15 * 60000)
  const duha = new Date((ishraq.getTime() + dhuhr.getTime()) / 2)
  const zawwal = new Date(dhuhr.getTime() - 10 * 60000)
  const nextFajr = new Date(fajr.getTime() + 24 * 60 * 60000)

  const total = toMinutes(nextFajr) - toMinutes(fajr)

  const segments = [
    seg('fajr-sunrise', fajr, sunrise, '#0B1D51', '#FFB56B', 'prayer'),
    seg('sunrise-ishraq', sunrise, ishraq, '#FFB56B', '#FFE9A0', 'forbidden'),
    seg('ishraq-duha', ishraq, duha, '#FFE9A0', '#87CEEB', 'prayer'),
    seg('duha-zawwal', duha, zawwal, '#87CEEB', '#4AA3DF', 'forbidden'),
    seg('zawwal-dhuhr', zawwal, dhuhr, '#4AA3DF', '#4AA3DF', 'prayer'),
    seg('dhuhr-asrEarly', dhuhr, asrEarly, '#4AA3DF', '#F2C57C', 'prayer'),
    seg('asrEarly-asrLate', asrEarly, asrLate, '#F2C57C', '#E08E45', 'prayer'),
    seg('asrLate-maghrib', asrLate, maghrib, '#E08E45', '#D1495B', 'prayer'),
    seg('maghrib-isha', maghrib, isha, '#D1495B', '#1B1B3A', 'prayer'),
    seg('isha-lastThird', isha, nextFajr, '#1B1B3A', '#0A0F2C', 'prayer')
  ]

  return segments.map(s => ({
    ...s,
    width: ((toMinutes(s.end) - toMinutes(s.start)) / total) * 100
  }))
}

export function buildMarkers(times) {
  const base = toMinutes(times.fajr)
  const nextFajr = new Date(times.fajr.getTime() + 24 * 60 * 60000)
  const total = toMinutes(nextFajr) - base

  const entries = [
    ['Fajr', times.fajr],
    ['Sunrise', times.sunrise],
    ['Dhuhr', times.dhuhr],
    ['Asr (Early)', times.asrEarly],
    ['Asr (Late)', times.asrLate],
    ['Maghrib', times.maghrib],
    ['Isha', times.isha]
  ]

  return entries.map(([name, t]) => ({
    name,
    position: ((toMinutes(t) - base) / total) * 100
  }))
}
