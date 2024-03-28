import { useState } from "react";
import { UIInput } from "../../components/UI/UIInput/UIInput";
import { CiSearch } from "react-icons/ci";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { PlaceList } from "../../components/PlaceList/PlaceList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPlaces } from "../../store/slices/placesSlice";
import "./MainPage.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { places } = useAppSelector(state => state.places);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newPlace = await getCurrentWeather(value);
      dispatch(setPlaces([newPlace, ...places]));
      setValue("");
    }
  };

  const onIconClick = async () => {
    const newPlace = await getCurrentWeather(value);
    setPlaces([newPlace, ...places]);
    setValue("");
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

      <PlaceList />
    </main>
  );
};
