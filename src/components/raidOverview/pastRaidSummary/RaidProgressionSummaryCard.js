import React from "react";
import { Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2"; // or '@mui/material/Grid' if you've updated MUI version
import RaidProgressionSummaryBar from "./RaidProgressionSummaryBar"; // import your new component

const RaidProgressionSummaryCard = ({ name, bosses }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      success: {
        main: "#008001",
      },
    },
  });

  const killCount = (bosses, difficulty) => {
    return bosses.filter(
      (boss) => boss.difficulties[difficulty].status === "killed"
    ).length;
  };

  return (
    <Grid xs={12} md={6} lg={4}>
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={5}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 2,
              flexWrap: "nowrap",
            }}
            spacing={2}
          >
            <Typography variant="h5" sx={{ mb: 2, ml: 2 }}>
              {name}
            </Typography>
            <RaidProgressionSummaryBar
              killed={killCount(bosses, "normal")}
              difficulty="Normal"
              total={bosses.length}
            />
            <RaidProgressionSummaryBar
              killed={killCount(bosses, "heroic")}
              difficulty="Heroic"
              total={bosses.length}
            />
            <RaidProgressionSummaryBar
              killed={killCount(bosses, "mythic")}
              difficulty="Mythic"
              total={bosses.length}
            />
          </Grid>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default RaidProgressionSummaryCard;
