import { IForeCast } from "../types/IForecast";
import { BASE_URL } from "./core";

export const getForecast = async (place: string, numberOfDays: string) => {
  try {
    const response =
      await fetch(`${BASE_URL}/forecast.json?q=${place}&days=${numberOfDays}&key=071a984778e443cd949204822242703
    `);

    const forecast: IForeCast = await response.json();

    return forecast;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};
