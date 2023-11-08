import React from "react";
import { Box } from "@mui/material";

const ZoomedCircleImage = ({ imgLocation, title }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        border: "1px solid #FFF",
        overflow: "hidden",
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        component="img"
        src={imgLocation}
        alt={`${title}_thumb`}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          transition: "transform 0.3s ease-in-out",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default ZoomedCircleImage;
