import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { UIInput } from "../../components/UI/UIInput/UIInput";
import { CiSearch } from "react-icons/ci";
import { ICurrentWeather } from "../../types/ICurrent";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { PlaceList } from "../../components/PlaceList/PlaceList";
import "./MainPage.scss";
import { StorageKeys } from "../../utils/storageKeys";

export const MainPage = () => {
  const [value, setValue] = useState("");
  const [places, setPlaces] = useLocalStorage<ICurrentWeather[]>(
    StorageKeys.PLACES,
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newPlace = await getCurrentWeather(value);
      setPlaces([newPlace, ...places]);
    }
  };

  const onIconClick = async () => {
    const newPlace = await getCurrentWeather(value);
    setPlaces([newPlace, ...places]);
  };

  const handleDeletePlace = (location: string) => {
    const updatedPlaces = (places as ICurrentWeather[]).filter(
      (place) => place.location.name !== location
    );

    setPlaces(updatedPlaces);
  };

  return (
    <main className="page">
      <UIInput
        value={value}
        onChange={handleChange}
        icon={CiSearch}
        onKeyDown={handleKeyPress}
        placeholder="Search for your places"
        onIconClick={onIconClick}
      />

      <PlaceList places={places} onDeletePlace={handleDeletePlace} />
    </main>
  );
};
