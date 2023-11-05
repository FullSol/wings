import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { NavButton } from "./";

const Navigation = ({ links }) => {
  const navBoxStyles = {
    alignItems: "center",
    "& > *": {
      m: 1,
    },
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
  };

  return (
    <Box component="nav" sx={navBoxStyles}>
      {links.map((link) => {
        return (
          <NavButton
            key={link.id}
            location={link.location}
            label={link.label}
          />
        );
      })}
    </Box>
  );
};

export default Navigation;

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
