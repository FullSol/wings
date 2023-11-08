import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Streams = () => {
  const twitchEmbedUrl = (channel) => {
    const hostName = window.location.hostname;

    const parent = hostName.includes("localhost")
      ? "localhost"
      : "www.wingsguild.com";

    return `https://player.twitch.tv/?channel=${channel}&parent=${parent}`;
  };

  return (
    <Grid container xs={12} spacing={2}>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h2" component="h2" sx={{ display: "none" }}>
          Wings Watch
        </Typography>
      </Grid>
      <Grid xs={12} lg={6} sx={{ height: "500px" }}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <iframe
            title="cheets"
            src={twitchEmbedUrl("cheets")}
            height="100%"
            width="100%"
            allowFullScreen
          ></iframe>
        </Paper>
      </Grid>
      <Grid xs={12} lg={6} sx={{ height: "500px" }}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <iframe
            title="solsphere"
            src={twitchEmbedUrl("solsphere")}
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
