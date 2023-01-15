import * as React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function NavBar(props: Props) {
  const favList = useSelector((state: RootState) => state.favorite.favList);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      style={{ backgroundColor: "none", height: "100%" }}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        TRAVEL TIME
      </Typography>
      <Divider />
      <List>
        <Link style={{ textDecoration: "none", color: "#2a2828" }} to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>HOME</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#2a2828" }}
          to="/countries"
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>COUNTRIES</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#2a2828" }}
          to="/favorite"
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>FAVORITE</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            style={{
              fontFamily: "fantasy",
              fontWeight: 600,
            }}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TRAVEL TIME
          </Typography>

          <Box
            sx={{
              position: "absolute",
              right: 0,
              display: { xs: "none", sm: "block" },
            }}
          >
            <List
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                marginRight: "30px",
              }}
            >
              <Link style={{ textDecoration: "none", color: "#f8f8f8" }} to="/">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>HOME</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#f8f8f8" }}
                to="/countries"
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText>COUNTRIES</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#f8f8f8" }}
                to="/favorite"
              >
                <ListItem sx={{ position: "relative" }} disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      WISH LIST
                      <Box
                        component="span"
                        sx={{
                          p: 1,
                          position: "absolute",
                          top: "0",
                          fontSize: "10px",
                          color: "#fafafa",
                        }}
                      >
                        {favList.length}
                      </Box>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 2 }}></Box>
    </Box>
  );
}
