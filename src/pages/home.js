import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Header } from "../components/header";
// import { SubTitle } from "../components/headings";
import New from "../components/new/new";
import Streams from "../components/streams/streams";
// import CharacterCard from "../components/roster/characterCard/characterCard";
import Roster from "../components/roster/roster";
import Progression from "../components/progression/progression";
import EmeraldDream from "../media/patch_10.2_assets/environments/Emerald_Dream_Amirdrassil_Seed.jpg";
import About from "../components/about/about";

const Home = () => {
  const [state, setState] = useState({
    siteTitle: "",
    navLinks: [],
    darkMode: "",
  });

  const { siteTitle, navLinks } = state;

  useEffect(() => {
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
      <Header title={siteTitle} links={navLinks} />
      <Grid container component="main" direction="column">
        <Grid component="section">
          <About />
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
            p: 20,
          }}
        >
          <Container maxWidth="xl">
            <Progression />
          </Container>
        </Grid>
        <Grid
          component="section"
          sx={{ pt: 10, pb: 10, backgroundColor: "#1E1E1E" }}
        >
          <Container maxWidth="xl">
            <Roster />
          </Container>
        </Grid>
        <Grid component="section" sx={{ mt: 2, mb: 2 }}>
          <Container maxWidth="xl">
            <Streams />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
