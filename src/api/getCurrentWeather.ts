import { BASE_URL } from "./core";

export const getCurrentWeather = async (place: string) => {
  try {
    const response =
      await fetch(`${BASE_URL}/current.json?q=${place}&key=${import.meta.env.API_KEY}
    `);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
