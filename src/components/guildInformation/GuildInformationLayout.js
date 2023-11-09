import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GuildLogo from "./GuildLogo";
import GuildReportButtons from "./GuildReportButtons";
import GuildNameTitle from "./GuildNameTitle";
import GuildSubTitle from "./GuildSubTitle";
import GuildInterests from "./GuildInterests";
import GuildAbout from "./GuildAbout";
import GuildApplyButton from "./GuildApplyButton";

const GuildInformationLayout = ({ info }) => {
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
          <GuildLogo logo={info.logo} />
        </Grid>
        <Grid>
          <GuildNameTitle text={info.name} />
          <GuildSubTitle
            faction={info.faction}
            realm={info.realm}
            region={info.region}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <GuildInterests interests={info.mindset} />
        </Grid>
        <Grid>
          <GuildInterests interests={info.interests} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <GuildReportButtons sites={info.reportingSites} />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <GuildAbout text={info.about} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <GuildApplyButton application={info.apply} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GuildInformationLayout;

GuildInformationLayout.propTypes = {};
