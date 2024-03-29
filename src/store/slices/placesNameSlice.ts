import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PlacesNameState {
  placesName: string[];
}

const initialState: PlacesNameState = {
  placesName: [],
};

const placesNameState = createSlice({
  name: "placesName",
  initialState: initialState,
  reducers: {
    setPlacesName: (state, action: PayloadAction<string[]>) => {
      state.placesName = action.payload;
    },
    removePlacesName: (state, action: PayloadAction<string>) => {
      state.placesName = state.placesName.filter(
        (place) => place.trim().toLowerCase() !== action.payload.toLowerCase()
      );
    },
  },
});

export const { setPlacesName, removePlacesName } = placesNameState.actions;

export const placesNameReducer = placesNameState.reducer;
