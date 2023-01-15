import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/type";

type InitialState = {
  countries: Country[];
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  countries: [],
  loading: false,
  error: "",
};
const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryData: (state, action) => {
      state.countries = action.payload;
    },

    sortByName: (state) => {
      const sort = state.countries.sort(function (a, b) {
        if (a.name.common > b.name.common) {
          return 1;
        }
        if (a.name.common < b.name.common) {
          return -1;
        }
        return 0;
      });
      state.countries = sort;
    },
    sortByNameReverse: (state) => {
      state.countries.sort(function (a, b) {
        if (a.name.common > b.name.common) {
          return -1;
        }
        if (a.name.common < b.name.common) {
          return 1;
        }
        return 0;
      });
    },
  },
});

export const countryActions = countrySlice.actions;
const reducer = countrySlice.reducer;
export default reducer;
