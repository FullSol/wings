import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Paper, Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ZoomedCircleImage from "../zoomedCircleImage";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Switching the theme mode to 'dark'
    success: {
      main: "#008001", // This is an example color. Replace with the color you want.
    },
  },
});

const RaidBossProgressionCard = ({
  name,
  title,
  imgLocation,
  progress,
  pulls,
  status,
  date,
}) => {
  return (
    <Grid xs={12} md={6} lg={4}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{
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
            xs={12}
          >
            <Grid sx={{ mr: 6 }}>
              <ZoomedCircleImage imgLocation={imgLocation} title={title} />
            </Grid>
            <Grid
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
                xs={12}
              >
                <Grid xs={12}>
                  <Typography variant="h5">{name}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography>{`Status: ${
                    status === "killed" ? "Dead" : "Alive"
                  } / Pulls: ${pulls}`}</Typography>
                </Grid>
                <Grid xs={12}>
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
          {date && date.getTime() > 0 && (
            <Grid>
              <Typography>
                First Killed:{" "}
                {date.toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Grid>
          )}
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default RaidBossProgressionCard;

RaidBossProgressionCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgLocation: PropTypes.string.isRequired,
  lowest: PropTypes.number.isRequired,
};
