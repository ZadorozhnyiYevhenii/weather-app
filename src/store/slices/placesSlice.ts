import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICurrentWeather } from "../../types/ICurrent";

interface IPlacesSlice {
  places: ICurrentWeather[];
}

const initialState: IPlacesSlice = {
  places: [],
};

const placesState = createSlice({
  name: "places",
  initialState: initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<ICurrentWeather[]>) => {
      state.places = action.payload;
    },
    removePlace: (state, action: PayloadAction<string>) => {
      state.places = state.places.filter((place) => place.location.name !== action.payload);
    },
  },
});

export const {
  setPlaces,
  removePlace
} = placesState.actions;

export const placesReducer = placesState.reducer;
