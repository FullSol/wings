import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GuildStreamers from "../components/guildStreamers/StreamersContainer";
import RaidOverview from "../components/raidOverview/RaidOverview";
import GuildInformation from "../components/guildInformation/GuildInformation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import News from "../components/news/News";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  return (
    <>
      <Grid container component="main" direction="column">
        <Grid component="section" sx={{ bgcolor: "#1E1E1E" }}>
          <ThemeProvider theme={darkTheme}>
            <GuildInformation />
          </ThemeProvider>
        </Grid>
        <Grid component="section">
          <News />
        </Grid>
        <Grid
          component="section"
          sx={{
            bgcolor: "#1E1E1E",
            width: "100%",
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.REACT_APP_WINGS_API_URL}/media/patch_10.2_assets/environments/Emerald_Dream_Amirdrassil_Seed.jpg)`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
          }}
        >
          <Container maxWidth="xl">
            <RaidOverview />
          </Container>
        </Grid>
        <Grid component="section">
          <Container maxWidth="xl">
            <GuildStreamers />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
