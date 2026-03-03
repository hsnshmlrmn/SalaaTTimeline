export function formatTime(date) {
  if (!(date instanceof Date) || isNaN(date)) return '--:--'

  let h = date.getHours()
  let m = date.getMinutes().toString().padStart(2, '0')

  const suffix = h >= 12 ? 'PM' : 'AM'
  h = h % 12
  if (h === 0) h = 12

  return `${h}:${m} ${suffix}`
}
