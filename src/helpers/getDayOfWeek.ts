export const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return date.toLocaleDateString('en-US', options);
};