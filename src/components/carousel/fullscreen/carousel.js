import React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@mui/material";

const Carousel = ({
  slide,
  animationKey,
  border,
  children,
  preloadedImages,
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        p: border ? 2 : 0,
        backgroundColor: border ? "transparent" : "",
      }}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100vh",
            objectFit: "contain",
            border: border ? "1px solid rgba(255, 255, 255, 0.8)" : "none",
            borderRadius: border ? "50px" : 0,
          }}
          key={animationKey}
          src={preloadedImages[slide.imgLocation].src}
          alt={`Slide ${slide.id}`}
        />
      </Box>
      {children}
    </Container>
  );
};

Carousel.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgLocation: PropTypes.string.isRequired,
  }).isRequired,
  animationKey: PropTypes.number.isRequired,
  border: PropTypes.bool,
  children: PropTypes.node,
};

export default Carousel;
