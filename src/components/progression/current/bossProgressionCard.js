import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Paper, Box, Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Switching the theme mode to 'dark'
    success: {
      main: "#008001", // This is an example color. Replace with the color you want.
    },
  },
});

const BossProgressionCard = ({
  name,
  title,
  imgLocation,
  progress,
  preloadedImages,
}) => {
  return (
    <Grid item xs={8} md={4}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            borderLeft: "8px solid green",
          }}
        >
          <Box
            component="img"
            src={imgLocation}
            alt={`${title}_thumb`}
            sx={{
              width: "30%",
              borderRadius: "50%",
              border: "1px solid white",
            }}
          />
          <Grid container sx={{ ml: 2 }}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5">{name}</Typography>
              <Typography>Status: Alive</Typography>
              <LinearProgress
                variant="determinate"
                color="success"
                value={100 - progress}
                sx={{ width: "200px", height: "10px" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default BossProgressionCard;

BossProgressionCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgLocation: PropTypes.string.isRequired,
  lowest: PropTypes.number.isRequired,
};
