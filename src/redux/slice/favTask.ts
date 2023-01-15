import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Country } from "../../types/type";

type InitialState = {
  favList: Country[];
};

const initialState: InitialState = {
  favList: [],
};
const favTaskSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<Country>) => {
      state.favList.push(action.payload);
    },
    removeFav: (state, action) => {
      const result = state.favList.findIndex(
        (country) => country.name.common === action.payload
      );
      if (result !== -1) {
        state.favList.splice(result, 1);
      }
    },
  },
});

export const favActions = favTaskSlice.actions;
const reducer = favTaskSlice.reducer;
export default reducer;
