import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const SubTitle = ({ sx, text }) => {
  return (
    <Typography sx={sx ? sx : {}} variant="h2" component="h2">
      {text}
    </Typography>
  );
};

export default SubTitle;

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
