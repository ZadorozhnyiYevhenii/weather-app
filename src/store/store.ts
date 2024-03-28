import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { placesReducer } from "./slices/placesSlice";
import { placesNameReducer } from "./slices/placesNameSlice";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage,
};

const persistentPlacesName = persistReducer(persistConfig, placesNameReducer)

export const store = configureStore({
  reducer: {
    places: placesReducer,
    placesName: persistentPlacesName 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
