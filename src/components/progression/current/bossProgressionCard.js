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
    <Grid item xs={12} md={6} lg={4}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{
            // borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderLeft: "6px solid green",
          }}
        >
          <Grid
            container
            sx={{
              display: { xs: "flex" },
              flexDirection: "row",
              p: 2,
              flexWrap: "nowrap",
            }}
          >
            <Grid item sx={{ mr: 6 }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "1px solid #FFF",
                  overflow: "hidden",
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={imgLocation}
                  alt={`${title}_thumb`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    transition: "transform 0.3s ease-in-out",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                p: 2,
                width: "100%",
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  flexWrap: "nowrap",
                }}
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography variant="h5">{name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Status: Alive</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    <LinearProgress
                      variant="determinate"
                      color="success"
                      value={100 - progress}
                      sx={{ height: "15px" }}
                    />
                  </Typography>
                </Grid>
              </Grid>
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
