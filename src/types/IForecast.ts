import { ICondition } from "./ICondition";
import { ILocation } from "./ILocation";
import { IWeather } from "./IWeather";

export interface IForeCast {
  location: ILocation;
  current: IWeather;
  forecast: IForeCastPeriod;
}

export interface IForeCastPeriod {
  forecastday: IForecastDay[];
}

export interface IHour {
  condition: ICondition;
  time: string;
  temp_c: number;
  temp_f: number;
  wind_mph: number;
  wind_kph: number;
}

interface IForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    mintemp_f: number;
    maxtemp_f: number;
    avgtemp_c: number;
    maxwind_kph: number;
    maxwind_mph: number;
    condition: ICondition;
  };
  hour: IHour[];
}
