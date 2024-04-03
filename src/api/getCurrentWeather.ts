import { BASE_URL } from "./core";

export const getCurrentWeather = async (place: string) => {
  try {
    const response =
      await fetch(`${BASE_URL}/current.json?q=${place}&key=071a984778e443cd949204822242703
    `);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error
  }
};
