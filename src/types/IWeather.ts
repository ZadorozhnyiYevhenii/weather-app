import { ICondition } from "./ICondition";

export interface IWeather {
  temp_c: number;
  temp_f: number;
  wind_mph: number;
  wind_kph: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: ICondition;
  precip_mm: number;
  precip_in: number;
}
