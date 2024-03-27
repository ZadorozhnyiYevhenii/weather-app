export const getCurrentWeather = async (place: string) => {
  try {
    const response = await fetch(``)

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error)
  }
}