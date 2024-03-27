import { ILocation } from "./ILocation";
import { IWeather } from "./IWeather";

export interface ICurrent {
  location: ILocation;
  current: IWeather;
}
