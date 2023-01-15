import { AppDispatch } from "../store";
import { countryActions } from "../slice/country";

const url = "https://restcountries.com/v3.1/all";

export function fetchCountryData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const countryData = await response.json();
    dispatch(countryActions.getCountryData(countryData));
  };
}
