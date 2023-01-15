import React, { useState } from "react";
import Card from "@mui/material/Card";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { AlertTitle, CardMedia, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

import { Country } from "../../types/type";
import { AppDispatch, RootState } from "../../redux/store";
import { favActions } from "../../redux/slice/favTask";
import { searchActions } from "../../redux/slice/search";

type Props = {
  item: Country;
  searchList: Country[];
};

function CountryItem({ item, searchList }: Props) {
  let countryName = item.name;
  let image = item.flags.png;
  let lang = item.languages;

  const dispatch = useDispatch<AppDispatch>();
  const favList = useSelector((state: RootState) => state.favorite.favList);
  const isDuplicated = favList.some(
    (favItem) =>
      favItem.name.common.toLocaleLowerCase() ===
      item.name.common.toLocaleLowerCase()
  );
  const isFavorite = favList.some((element) => element.area === item.area);

  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);

  const handleAdd = () => [setAdd(true)];
  const handleClick = () => {
    setOpen(true);
  };
  const resetSearch = () => {
    dispatch(searchActions.reset());
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setAdd(false);
  };

  return (
    <TableBody>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="center">
          <Card style={{ margin: "auto" }} sx={{ maxWidth: 200 }}>
            <CardMedia component="img" height="100%" image={image} alt="Flag" />
          </Card>
        </TableCell>
        <TableCell align="center">
          <Typography>{countryName.common}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{item.region}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{item.population}</Typography>
        </TableCell>
        <TableCell align="center">
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            {lang
              ? Object.values(lang).map((lang, index) => (
                  <ListItem
                    sx={{ display: "list-item" }}
                    style={{ display: "flex", justifyContent: "center" }}
                    key={index}
                  >
                    {lang}
                  </ListItem>
                ))
              : null}
          </List>
        </TableCell>
        <TableCell align="center">
          <FavoriteBorderIcon
            aria-label="addFav"
            sx={{ color: isFavorite ? red[500] : "action" }}
            onClick={() => {
              isDuplicated
                ? handleClick()
                : dispatch(favActions.addFav(item)) && handleAdd();
            }}
          />
        </TableCell>
        <TableCell align="center" style={{ marginTop: "20px" }}>
          <Link to={`/countryDetail/${item.name.common}`} onClick={resetSearch}>
            <ReadMoreIcon color="action" />
          </Link>
        </TableCell>
      </TableRow>

      <Snackbar open={add} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Item added to favorites
        </Alert>
      </Snackbar>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          The country is already inside favorite list!
        </Alert>
      </Snackbar>
    </TableBody>
  );
}

export default CountryItem;
