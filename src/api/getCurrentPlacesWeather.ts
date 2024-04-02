import { ICurrentWeather } from "../types/ICurrent";
import { getCurrentWeather } from "./getCurrentWeather";

export const getCurrentPlacesWeather = async (prevPlaces: string[]) => {
  try {
    const weatherPromises = prevPlaces.map(place => getCurrentWeather(place));
    
    const weatherData: ICurrentWeather[] = await Promise.all(weatherPromises);
    
    return weatherData;
  } catch (error) {
    console.error(error);
    throw new Error
  }
}