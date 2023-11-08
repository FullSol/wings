import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Header } from "../components/header";
// import { SubTitle } from "../components/headings";
import New from "../components/new/new";
import Streams from "../components/streams/streams";
// import CharacterCard from "../components/roster/characterCard/characterCard";
import Roster from "../components/roster/roster";
import RaidOverview from "../components/raidOverview/RaidOverview";
import EmeraldDream from "../media/patch_10.2_assets/environments/Emerald_Dream_Amirdrassil_Seed.jpg";
import About from "../components/about/about";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  const [state, setState] = useState({
    siteTitle: "",
    navLinks: [],
    darkMode: "",
  });

  const { siteTitle, navLinks } = state;

  useEffect(() => {
    document.title = "Wings";
    import("../data/headerInfo").then(({ HeaderInfo: data }) => {
      setState((prevState) => ({
        ...prevState,
        siteTitle: data.siteTitle,
        navLinks: data.navLinks,
      }));
    });
  }, []);

  return (
    <>
      <Grid container component="main" direction="column">
        <Grid component="section" sx={{ bgcolor: "#1E1E1E" }}>
          <ThemeProvider theme={darkTheme}>
            <About />
          </ThemeProvider>
        </Grid>
        <Grid component="section">
          <New />
        </Grid>
        <Grid
          component="section"
          sx={{
            width: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${EmeraldDream})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Container maxWidth="xl">
            <RaidOverview />
          </Container>
        </Grid>
        <Grid component="section" sx={{ height: "1000px" }}>
          <Container maxWidth="xl" sx={{ mt: "300px" }}>
            <Streams />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
