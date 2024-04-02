export const getHour = (time: string) => {
  return +new Date(time).getHours();
};
