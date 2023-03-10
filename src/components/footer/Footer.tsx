import { Paper, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Paper
        sx={{
          marginTop: "calc(10% + 60px)",
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          ></Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2022.
            </Typography>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Footer;
