import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Streams = () => {
  return (
    <Grid container xs={12} spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center", // Horizontal centering
          alignItems: "center", // Vertical centering
          height: "100%", // Set the height to occupy the full container height if needed
        }}
      >
        <Typography variant="h2" component="h2">
          Wings Watch
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ height: "500px" }}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <iframe
            title="cheets"
            src="https://player.twitch.tv/?channel=cheets&parent=localhost"
            height="100%"
            width="100%"
            allowFullScreen
          ></iframe>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ height: "500px" }}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <iframe
            title="solsphere"
            src="https://player.twitch.tv/?channel=solsphere&parent=localhost"
            height="100%"
            width="100%"
            allowFullScreen
          ></iframe>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Streams;
