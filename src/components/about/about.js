import React from "react";
import {
  Container,
  Typography,
  ButtonGroup,
  Button,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const About = () => {
  const noLinkButton = {
    textDecoration: "none",
    cursor: "default",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "inherit",
      border: ".5px solid inherit",
    },
  };

  return (
    <Container maxWidth="xl" sx={{ height: "100vh" }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: { xs: "5rem", md: "6rem" } }}
      >
        Wings
      </Typography>
      <Typography
        variant="h2"
        component={"h2"}
        sx={{ fontSize: { xs: "2.75rem", md: "3.75rem" } }}
      >
        Alliance - Area 52 US
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item>
          <ButtonGroup>
            <Button sx={noLinkButton}>Cutting Edge</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <ButtonGroup>
            <Button sx={noLinkButton}>Raiding</Button>
            <Button sx={noLinkButton}>Mythic Plus</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item>
          <ButtonGroup>
            <Tooltip title="Warcraft Logs">
              <Button>Warcraft Logs</Button>
            </Tooltip>
            <Tooltip title="Wow Armory">
              <Button>Wow Armory</Button>
            </Tooltip>
            <Tooltip title="Wow Progress">
              <Button>Wow Progress</Button>
            </Tooltip>
            <Tooltip title="Raider.io">
              <Button>Raider.io</Button>
            </Tooltip>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid item>
          <Typography
            variant="p"
            component="p"
            sx={{
              pr: 2,
              display: { xs: "none", md: "block" },
              maxWidth: "60%",
            }}
          >
            We are a Cutting Edge guild aiming for efficient progression through
            each tier, with the goal of achieving Cutting Edge in a timely
            manner. The guild seeks to perform at a high level on a 3-night
            schedule while maintaining an atmosphere where people want to log on
            outside the raid. We are a community where we pride ourselves on
            maintaining a tight-knit group with a common competitive mindset.
            The guild boasts an active community that often runs Mythic+
            together or plays other games. We raid Tuesday-Thursday from 9-12 PM
            EST.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item>
          <ButtonGroup>
            <Button>Apply</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
