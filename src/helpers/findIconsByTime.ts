import { IHour } from "../types/IForecast";
import { getHour } from "./getHour";

export const findIconsByTime = (arr: IHour[]) => {
  const time = [15];
  const filteredArr = arr.filter((forecast) =>
    time.includes(getHour(forecast.time))
  );

  const icons = filteredArr.map((arr) => ({icon: arr.condition.icon, text: arr.condition.text}));

  return icons;
};
