import { useEffect, useState } from "react";
import { UIInput } from "../../components/UI/UIInput/UIInput";
import { CiSearch } from "react-icons/ci";
import { getCurrentWeather } from "../../api/getCurrentWeather";
import { PlaceList } from "../../components/PlaceList/PlaceList";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setPlaces } from "../../store/slices/placesSlice";
import { getCurrentPlacesWeather } from "../../api/getCurrentPlacesWeather";
import { setPlacesName } from "../../store/slices/placesNameSlice";
import { Alert } from "antd";
import "./MainPage.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { places } = useAppSelector((state) => state.places);
  const { placesName } = useAppSelector((state) => state.placesName);
  const [value, setValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !placesName.includes(value.trim().toLowerCase())) {
      setIsLoading(true);
      try {
        const newPlace = await getCurrentWeather(value);
        setIsAdding(true);
        dispatch(setPlaces([newPlace, ...places]));
        dispatch(setPlacesName([value.trim().toLowerCase(), ...placesName]));
        setValue("");
      } catch {
        setErrorLoading(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onIconClick = async () => {
    if (!placesName.includes(value)) {
      setIsLoading(true);
      try {
        const newPlace = await getCurrentWeather(value);
        setIsAdding(true);
        setPlaces([newPlace, ...places]);
        dispatch(setPlacesName([value.trim().toLowerCase(), ...placesName]));
        setValue("");
      } catch (error) {
        setErrorLoading(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchAllPlaces = async () => {
      try {
        const allPlaces = await getCurrentPlacesWeather(placesName);
        dispatch(setPlaces(allPlaces));
      } catch (error) {
        setErrorLoading(true);
        console.error(error);
      } finally {
        setIsLoading(false);
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
        loading={isLoading}
      />
      {errorLoading ? (
        <Alert message="Error" type="error" />
      ) : (
        <PlaceList isAdding={isAdding} />
      )}
    </main>
  );
};
