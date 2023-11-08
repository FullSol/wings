import React from "react";
import {
  Container,
  Box,
  Typography,
  ButtonGroup,
  Button,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import Logo from "../../media/wings-logo-ai.png";
import WarcraftLogs from "../../media/icons/warcraft-logs-logo.png";
import WowArmory from "../../media/icons/warcraft-icon.png";
import Curse from "../../media/icons/curse-icon.png";
import RaiderIO from "../../media/icons/raiderio_logo.png";
const About = () => {
  const theme = useTheme();

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
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid container>
        <Grid>
          <Box
            component="img"
            alt="wings"
            src={Logo}
            sx={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "1px solid #1E1E1E",
              backgroundColor: "#0D0906",
            }}
          />
        </Grid>
        <Grid>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: "5rem",
                md: "6rem",
                color: theme.palette.text.primary,
              },
            }}
          >
            Wings
          </Typography>
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              fontSize: {
                xs: "2.75rem",
                md: "3.75rem",
                color: theme.palette.text.primary,
              },
            }}
          >
            Alliance - Area 52 US
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <ButtonGroup>
            <Button sx={noLinkButton} color="error">
              Cutting Edge
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid>
          <ButtonGroup color="error">
            <Button sx={noLinkButton}>Raiding</Button>
            <Button sx={noLinkButton}>Mythic Plus</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <ButtonGroup sx={{ backgroundColor: "#1E1E1E" }} color="error">
            <Tooltip title="Warcraft Logs">
              <Button
                href="https://www.warcraftlogs.com/guild/id/707417"
                target="_blank"
                rel="noreferrer"
              >
                <Box component="img" src={WarcraftLogs} alt="Warcraft Logs" />
              </Button>
            </Tooltip>
            <Tooltip title="Wow Armory">
              <Button
                href="https://worldofwarcraft.blizzard.com/en-us/guild/us/area-52/wings"
                target="_blank"
                rel="noreferrer"
              >
                <Box component="img" src={WowArmory} alt="Warcraft Armory" />
              </Button>
            </Tooltip>
            <Tooltip title="Wow Progress">
              <Button
                href="https://www.wowprogress.com/guild/us/area-52/Wings"
                target="_blank"
                rel="noreferrer"
              >
                <Box component="img" src={Curse} alt="Wow Progress" />
              </Button>
            </Tooltip>
            <Tooltip title="Raider.io">
              <Button
                href="https://raider.io/guilds/us/area-52/Wings"
                target="_blank"
                rel="noreferrer"
              >
                <Box component="img" src={RaiderIO} alt="Raider.io" />
              </Button>
            </Tooltip>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <Typography
            variant="p"
            component="p"
            sx={{
              pr: 2,
              display: { xs: "none", md: "block" },
              maxWidth: "60%",
              color: theme.palette.text.primary,
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
        <Grid>
          <ButtonGroup color="error">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBu7P9KPVgwy5K3nNIxhHFvJtKxNmqmiNcdknsrB8H0T8m2A/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Apply
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
