import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ISpeed = 'km' | 'ml' | null;

export type Temp = 'c' | 'f' | null;

interface SettingsState {
  speedType: ISpeed | null;
  tempType: Temp | null;
}

const initialState: SettingsState = {
  speedType: 'km',
  tempType: "c",
};

export const settingsState = createSlice({
  name: "settings",
  initialState: initialState,
  reducers: {
    setSpeedType: (state, action: PayloadAction<ISpeed>) => {
      state.speedType = action.payload;
    },
    setTempType: (state, action: PayloadAction<Temp>) => {
      state.tempType = action.payload;
    },
  },
});

export const { setSpeedType, setTempType } = settingsState.actions;

export const settingsReducer = settingsState.reducer;
