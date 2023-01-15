import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/type";

type InitialState = {
  countryName: Country[];
};

const initialState: InitialState = {
  countryName: [],
};
const countryNameSlice = createSlice({
  name: "countryName",
  initialState,
  reducers: {
    getCountryName: (state, action) => {
      state.countryName = action.payload;
    },
  },
});

export const countryNameActions = countryNameSlice.actions;
const reducer = countryNameSlice.reducer;
export default reducer;
