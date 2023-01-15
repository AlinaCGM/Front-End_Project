import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/type";

type InitialState = {
  searchList: Country[];
};

const initialState: InitialState = {
  searchList: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.searchList = action.payload;
    },
    reset: (state) => {
      state.searchList = [];
    },
  },
});

export const searchActions = searchSlice.actions;
const reducer = searchSlice.reducer;
export default reducer;
