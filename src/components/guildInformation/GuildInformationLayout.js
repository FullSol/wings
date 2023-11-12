import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GuildLogo from "./GuildLogo";
import GuildNameTitle from "./GuildNameTitle";
import GuildSubTitle from "./GuildSubTitle";
import GuildButtonGroups from "./GuildButtonGroups";
import GuildAbout from "./GuildAbout";

const GuildInformationLayout = ({ info }) => {
  const renderButtonGroups = (section) => {
    return (
      <Grid>
        <GuildButtonGroups
          buttons={info[section].buttons}
          tooltip={info[section].tooltip}
          color={info[section].color}
        />
      </Grid>
    );
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
        {renderButtonGroups("mindset")}
        {renderButtonGroups("interests")}
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {renderButtonGroups("reportingSites")}
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid>
          <GuildAbout text={info.about} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {renderButtonGroups("apply")}
      </Grid>
    </Container>
  );
};

export default GuildInformationLayout;

GuildInformationLayout.propTypes = {};
