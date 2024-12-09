export function isValidDate(day: number) {
  return day <= new Date().getDate();
}
