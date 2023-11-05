import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Title = ({ sx, text }) => {
  return (
    <Typography sx={sx ? sx : {}} variant="h1" component="h1">
      {text}
    </Typography>
  );
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
