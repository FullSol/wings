import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Header } from "../components/header";
// import { SubTitle } from "../components/headings";
import New from "../components/new/new";
import Streams from "../components/streams/streams";
import CharacterCard from "../components/roster/characterCard/characterCard";
import Roster from "../components/roster/roster";

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
          <New />
        </Grid>
        {/* <Grid component="section">
          <Container maxWidth="xl">
            <SubTitle text="Current Progression" />
          </Container>
        </Grid> */}
        <Grid component="section">
          <Container maxWidth="xl">
            <Roster />
          </Container>
        </Grid>
        <Grid component="section">
          <Container maxWidth="xl">
            <Streams />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
