import React from "react";
import { Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import StreamerPanel from "./StreamerPanel";

const StreamerWrapper = ({ streamers }) => {
  return (
    <Grid container xs={12} spacing={2} sx={{ pt: 8, pb: 8 }}>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
          Wings Watch
        </Typography>
      </Grid>
      {streamers.map((streamer) => {
        return (
          <Grid key={streamer.id} xs={12} lg={6}>
            <Paper
              sx={{
                overflow: "hidden",
                minHeight: "500px",
                p: 2,
                bgcolor: "#1E1E1E",
              }}
            >
              <StreamerPanel
                name={streamer.name}
                twitchEmbedUrl={streamer.twitchEmbedUrl}
                height="500px"
              />
              <Typography variant="h4" color="white">
                {streamer.name}
              </Typography>
              <Typography variant="p" color="white">
                {streamer.specialization + " " + streamer.class}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default StreamerWrapper;
