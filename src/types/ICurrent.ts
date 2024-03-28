import { ILocation } from "./ILocation";
import { IWeather } from "./IWeather";

export interface ICurrentWeather {
  location: ILocation;
  current: IWeather;
}
