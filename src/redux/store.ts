import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "./slice/country";
import searchReducer from "./slice/search";
import favReducer from "./slice/favTask";
import countryNameReducer from "./slice/countryName";

const store = configureStore({
  reducer: {
    country: countryReducer,
    search: searchReducer,
    favorite: favReducer,
    countryName: countryNameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
