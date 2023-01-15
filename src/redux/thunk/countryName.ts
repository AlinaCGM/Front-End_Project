import { countryNameActions } from "../slice/countryName";
import { AppDispatch } from "../store";

export function fetchCountryName(url: string) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const countryData = await response.json();
    dispatch(countryNameActions.getCountryName(countryData));
  };
}
