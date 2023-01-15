import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, IconButton, List } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

import { Country } from "../../types/type";

type Props = {
  country: Country[];
};

function CountryDetailsItem({ country }: Props) {
  const navigate = useNavigate();
  let lang = country[0]?.languages;
  const navigateIcon = () => {
    navigate("/countries");
  };
  return (
    <Container style={{ width: "80%", margin: "auto", marginBlock: "100px" }}>
      <Card style={{ margin: "auto" }} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="auto"
          image={country[0]?.flags.png}
          alt="country detail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country[0]?.name.common}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {country[0]?.region}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Population: {country[0]?.population}
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
          <a
            href={country[0]?.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PersonPinCircleIcon color="secondary" />
          </a>
          <Box style={{ marginTop: "20px" }}>
            <IconButton
              aria-label="back to products' page"
              onClick={navigateIcon}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CountryDetailsItem;
