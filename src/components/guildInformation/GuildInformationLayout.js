import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GuildLogo from "./GuildLogo";
import GuildNameTitle from "./GuildNameTitle";
import GuildSubTitle from "./GuildSubTitle";
import GuildButtonGroup from "./GuildButtonGroup";
import GuildAbout from "./GuildAbout";

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
          <GuildButtonGroup
            buttons={info.mindset.buttons}
            color={info.mindset.color}
          />
        </Grid>
        <Grid>
          <GuildButtonGroup
            buttons={info.interests.buttons}
            tooltip={info.interests.tooltip}
            color={info.interests.color}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <GuildButtonGroup
            buttons={info.reportingSites.buttons}
            color={info.reportingSites.color}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <GuildAbout text={info.about} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid>
          <GuildButtonGroup
            buttons={info.apply.buttons}
            color={info.apply.color}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GuildInformationLayout;

GuildInformationLayout.propTypes = {};
