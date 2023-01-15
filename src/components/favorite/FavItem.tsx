import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import DeleteIcon from "@mui/icons-material/Delete";

import { AppDispatch } from "../../redux/store";
import { favActions } from "../../redux/slice/favTask";
import { Country } from "../../types/type";

type Prop = {
  item: Country;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function FavItem({ item, setOpen }: Prop) {
  const dispatch = useDispatch<AppDispatch>();

  let lang = item.languages;

  const removeFav = () => {
    dispatch(favActions.removeFav(item.name.common));
    setOpen(true);
  };

  return (
    <Container
      style={{
        width: "40%",
        margin: "auto",
        marginBlock: "100px",
      }}
    >
      <Card style={{ margin: "auto" }} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={item.flags.png}
          alt="green iguana"
        />
        <CardContent style={{ height: 200 }}>
          <Typography gutterBottom variant="h5" component="h6">
            {item.name.common}
          </Typography>
          <Typography variant="subtitle1" component="h6">
            {item.region}
          </Typography>
          <Typography variant="subtitle1" component="h6">
            Population: {item.population}
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
            component="h6"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 2,
              m: "auto",
              bgcolor: "background.paper",
              maxWidth: 200,
              borderRadius: 1,
            }}
          >
            <List sx={{ listStyleType: "disc", pl: 4 }}>
              {lang
                ? Object.values(lang).map((lang, index) => (
                    <ListItem sx={{ display: "list-item" }} key={index}>
                      {lang}
                    </ListItem>
                  ))
                : null}
            </List>
          </Typography>
        </CardContent>
        <CardActions>
          <DeleteIcon
            color="action"
            aria-label="removeFav"
            onClick={removeFav}
          />
        </CardActions>
      </Card>
    </Container>
  );
}

export default FavItem;
