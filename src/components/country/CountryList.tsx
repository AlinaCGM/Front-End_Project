import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";

import { fetchCountryData } from "../../redux/thunk/country";
import { countryActions } from "../../redux/slice/country";
import CountryItem from "./CountryItem";
import { AppDispatch, RootState } from "../../redux/store";
import Loading from "../loading/Loading";

function CountryList() {
  let countryList = useSelector((state: RootState) => state.country.countries);

  const searchList = useSelector((state: RootState) => state.search.searchList);
  const loading = useSelector((state: RootState) => state.country.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  const [click, setClick] = useState(false);
  const dispatchSort = useDispatch();
  const handleOnSort: React.MouseEventHandler<HTMLTableCellElement> = (e) => {
    e.preventDefault();
    !click
      ? dispatchSort(countryActions.sortByName()) && setClick(true)
      : dispatchSort(countryActions.sortByNameReverse()) && setClick(false);
  };

  return (
    <Box style={{ width: "100%", marginBlock: "50px" }}>
      {searchList.length === 0 ? (
        <TableContainer
          sx={{ display: "inline-flex" }}
          style={{ width: "90%", margin: "auto" }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Flag </TableCell>

                {click ? (
                  <TableCell align="center" onClick={handleOnSort}>
                    <Box>
                      <Typography component="span">Name</Typography>
                      <ArrowDropDownIcon />
                    </Box>
                  </TableCell>
                ) : (
                  <TableCell align="center" onClick={handleOnSort}>
                    <Box>
                      <Typography component="span">Name</Typography>
                      <ArrowDropUpIcon />
                    </Box>
                  </TableCell>
                )}
                <TableCell align="center">
                  <Typography>Region</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Population</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Language</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Wish list</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Details</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            {loading ? (
              <Loading />
            ) : (
              countryList
                .slice(0, 20)
                .map((item, index) => (
                  <CountryItem
                    searchList={searchList}
                    key={index}
                    item={item}
                  />
                ))
            )}
          </Table>
        </TableContainer>
      ) : (
        <TableContainer
          sx={{ display: "inline-flex" }}
          style={{ width: "90%", margin: "auto" }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Flag </TableCell>

                {click ? (
                  <TableCell align="center" onClick={handleOnSort}>
                    <Box>
                      <Typography component="span">Name</Typography>
                      <ArrowDropDownIcon />
                    </Box>
                  </TableCell>
                ) : (
                  <TableCell align="center" onClick={handleOnSort}>
                    <Box>
                      <Typography component="span">Name</Typography>
                      <ArrowDropUpIcon />
                    </Box>
                  </TableCell>
                )}
                <TableCell align="center">
                  <Typography>Region</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Population</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Language</Typography>
                </TableCell>
                <TableCell align="center">
                  <FavoriteBorderIcon
                    aria-label="removeFav"
                    sx={{ color: red[500] }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Typography>Details</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {searchList.map((item, index) => (
              <CountryItem key={index} searchList={searchList} item={item} />
            ))}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default CountryList;
