import { useEffect, useState } from "react";
import { UIInput } from "../../components/UI/UIInput/UIInput";
import { CiSearch } from "react-icons/ci";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { PlaceList } from "../../components/PlaceList/PlaceList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPlaces } from "../../store/slices/placesSlice";
import { getCurrentPlacesWeather } from "../../api/getCurrentPlacesWeather";
import { setPlacesName } from "../../store/slices/placesNameSlice";
import "./MainPage.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { places } = useAppSelector((state) => state.places);
  const { placesName } = useAppSelector((state) => state.placesName);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !placesName.includes(value.trim().toLowerCase())) {
      const newPlace = await getCurrentWeather(value);
      dispatch(setPlaces([newPlace, ...places]));
      dispatch(setPlacesName([value.trim().toLowerCase(), ...placesName]));
      setValue("");
    }
  };

  const onIconClick = async () => {
    if (!placesName.includes(value)) {
      const newPlace = await getCurrentWeather(value);
      setPlaces([newPlace, ...places]);
      dispatch(setPlacesName([value.trim().toLowerCase(), ...placesName]));
      setValue("");
    }
  };

  useEffect(() => {
    const fetchAllPlaces = async () => {
      try {
        const allPlaces = await getCurrentPlacesWeather(placesName);
        dispatch(setPlaces(allPlaces));
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
