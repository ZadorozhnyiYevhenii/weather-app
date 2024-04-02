import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISpeed } from "../../types/ISpeed";
import { ITemp } from "../../types/ITemp";

interface SettingsState {
  speedType: ISpeed;
  tempType: ITemp;
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
    setTempType: (state, action: PayloadAction<ITemp>) => {
      state.tempType = action.payload;
    },
  },
});

export const { setSpeedType, setTempType } = settingsState.actions;

export const settingsReducer = settingsState.reducer;
