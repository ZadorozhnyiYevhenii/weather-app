import { IHour } from "../types/IForecast";
import { getHour } from "./getHour";

export const findIconsByTime = (arr: IHour[]) => {
  const time = [10, 16, 23];
  const filteredArr = arr.filter((forecast) =>
    time.includes(getHour(forecast.time))
  );
  
  const map = filteredArr.map((arr) => arr.condition.icon);
  // console.log(map)
  return map;
};
