import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Container } from "@mui/material";
import { Title, Navigation } from "./";

const Header = ({ title, links }) => {
  return (
    <AppBar component="header" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Title title={title} />
          <Navigation links={links} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
