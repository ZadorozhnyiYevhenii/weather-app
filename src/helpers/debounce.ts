export const debounce = <T>(
  callback: (...args: T[]) => void,
  delay: number | undefined
) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: T[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
