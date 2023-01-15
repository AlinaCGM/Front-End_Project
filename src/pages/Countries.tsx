import { Box } from "@mui/material";

import CountryList from "../components/country/CountryList";
import Search from "../components/search/Search";

function Countries() {
  return (
    <Box>
    <Search />
    <CountryList />
  </Box>
  );
}

export default Countries;
