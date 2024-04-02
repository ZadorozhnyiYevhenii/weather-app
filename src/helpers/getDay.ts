export const getDay = (date?: string) => {
  return String(new Date(date || '').getDate())
}
