import React from "react";
import { Box } from "@mui/material";

const GuildLogo = ({ logo }) => {
  return (
    <Box
      component="img"
      alt="wings"
      src={logo}
      sx={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        borderSize: "1px",
        borderStyle: "solid",
        backgroundColor: "#0D0906",
        borderColor: "white ",
      }}
    />
  );
};

export default GuildLogo;

GuildLogo.propTypes = {};
