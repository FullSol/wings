import React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@mui/material";

const Carousel = ({ slide, animationKey, children }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{ height: "100%", maxWidth: "100%", objectFit: "contain" }}
        component="img"
        animationKey={animationKey}
        src={require(`../../../media/${slide.imgLocation}`)}
        alignItems="center"
      />
      {children}
    </Container>
  );
};

export default Carousel;

Carousel.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgLocation: PropTypes.string.isRequired,
  }),
  animationKey: PropTypes.number.isRequired,
  imgLocation: PropTypes.string.isRequired,
};
