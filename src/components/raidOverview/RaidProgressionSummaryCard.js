import React from "react";
import { Paper, LinearProgress, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const RaidProgressionSummaryCard = ({ name, bosses }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Switching the theme mode to 'dark'
      success: {
        main: "#008001", // This is an example color. Replace with the color you want.
      },
    },
  });

  const killCount = (bosses, difficulty) => {
    let count = 0;

    bosses.forEach((boss) => {
      if (boss.difficulties[difficulty].status === "killed") count++;
    });

    return count;
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <Grid
            container
            sx={{
              display: { xs: "flex" },
              flexDirection: "column",
              p: 2,
              flexWrap: "nowrap",
            }}
            xs={12}
          >
            <Typography sx={{ mb: 2 }}>{name}</Typography>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                flexWrap: "nowrap",
                width: "100%",
              }}
              spacing={2}
            >
              <Grid item xs={12} sx={{ position: "relative" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 999,
                    bottom: 8,
                    left: 15,
                  }}
                >
                  Normal: {killCount(bosses, "normal")}/{bosses.length}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={100}
                  sx={{ height: "25px" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ position: "relative" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 999,
                    bottom: 8,
                    left: 15,
                  }}
                >
                  Heroic: {killCount(bosses, "heroic")}/{bosses.length}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={100}
                  sx={{ height: "25px" }}
                />
              </Grid>
              <Grid item xs={12} sx={{ position: "relative" }}>
                <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 999,
                    bottom: 8,
                    left: 15,
                  }}
                >
                  Mythic: {killCount(bosses, "mythic")}/{bosses.length}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={100}
                  sx={{ height: "25px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default RaidProgressionSummaryCard;
