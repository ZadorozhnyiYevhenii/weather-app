export const getMonthName = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'long' };
  return date.toLocaleDateString('en-US', options);
};