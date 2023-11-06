import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Container } from "@mui/material";
import { Navigation } from "./";
import { Title } from "../headings";

const Header = ({ title, links }) => {
  return (
    <AppBar component="header" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Title text={title} />
          {/* <Navigation links={links} /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
