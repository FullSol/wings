import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const Title = ({ title }) => {
  return (
    <Typography variant="h1" component="h1">
      {title}
    </Typography>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
