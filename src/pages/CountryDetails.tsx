import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

import { fetchCountryName } from "../redux/thunk/countryName";
import CountryDetailsItem from "../components/country/CountryDetailsItem";
import { Container } from "@mui/system";

function CountryDetails() {
  const country = useSelector(
    (state: RootState) => state.countryName.countryName
  );
  const detail = useParams();

  let url = `https://restcountries.com/v3.1/name/${detail.name}`;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCountryName(url));
  }, [dispatch, url]);

  return (
    <Container>
      <CountryDetailsItem country={country} />
    </Container>
  );
}

export default CountryDetails;
