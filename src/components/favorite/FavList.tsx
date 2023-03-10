import React, { useState } from "react";
import { Container, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AlertTitle } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../redux/store";
import FavItem from "./FavItem";
import { Box } from "@mui/system";

function FavList() {
  const list = useSelector((state: RootState) => state.favorite.favList);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const navigate = useNavigate();
  const navigateIcon = () => {
    navigate("/countries");
  };
  return (
    <Container
      sx={{ display: "flex", flexWrap: "wrap" }}
      style={{
        width: "100%",
        margin: "auto",
        height: "100%",
        marginBlock: "50px",
      }}
      component={Paper}
    >
      <Box style={{ marginTop: "20px" }}>
        <IconButton aria-label="back to products' page" onClick={navigateIcon}>
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      {list.map((item) => (
        <FavItem setOpen={setOpen} key={item.area} item={item} />
      ))}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Item removed from favorites
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default FavList;
