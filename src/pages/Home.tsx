import { Box, Container, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "../App.css";
import bgImg from "../assets/bg.png";
import image1 from "../assets/11.jpg";
import image2 from "../assets/44.jpg";
import image3 from "../assets/1.jpg";
import { Link } from "react-router-dom";

const styles = {
  background: {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: "#8d8989",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "94vh",
  },
};

function Home() {
  return (
    <Box style={styles.background}>
      <Box style={{ paddingTop: "20vh", marginBottom: "20px" }}>
        <Typography
          alignItems="flex-start"
          variant="h2"
          component="h2"
          style={{ color: "#ffffff", fontWeight: 600 }}
        >
          Exploring the world
        </Typography>
        <Typography style={{ color: "#ffffff" }} variant="h5" component="p">
          Pick your adventure
        </Typography>
      </Box>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageList
          style={{ borderBlock: "10px solid #d5dadd", paddingBlock: "20px" }}
          sx={{ width: "70%", height: "auto" }}
          variant="woven"
          cols={3}
          gap={20}
        >
          <ImageListItem>
            <img
              src={`${image1}?w=161&fit=crop&auto=format`}
              srcSet={`${image1}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${image2}?w=161&fit=crop&auto=format`}
              srcSet={`${image2}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`${image3}?w=161&fit=crop&auto=format`}
              srcSet={`${image3}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Container>
      <Link
        className="custom-link"
        style={{
          textDecoration: "none",
          color: "#f2ebeb",
          border: "1px solid #f2ebeb",
          padding: "5px 10px 5px 10px",
        }}
        to="/countries"
      >
        All trips
      </Link>
    </Box>
  );
}

export default Home;
