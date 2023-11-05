import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";

const NavButton = ({ location, label, target }) => {
  return (
    <Button href={location} target={target ? "_" + target : {}}>
      <Typography sx={{ color: "white" }}>{label}</Typography>
    </Button>
  );
};

export default NavButton;

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  target: PropTypes.string,
};
