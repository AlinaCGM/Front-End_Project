import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import FavCountries from "./pages/FavCountries";
import CountryDetails from "./pages/CountryDetails";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import Countries from "./pages/Countries";

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/countries" element={<Countries />}></Route>
        <Route path="/favorite" element={<FavCountries />}></Route>
        <Route path="/countryDetail/:name" element={<CountryDetails />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
