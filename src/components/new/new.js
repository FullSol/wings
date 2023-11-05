import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Carousel from "../carousel/fullscreen/carousel";
import { SubTitle } from "../headings";
import { default as Stepper } from "../stepper/nonLinear";

const SectionContainer = () => {
  const [state, setState] = useState({
    title: "",
    slides: [],
    animationKey: 0,
    activeStep: 0,
    labels: [],
    loading: true,
  });

  const { loading, title, slides, animationKey, activeStep, labels } = state;

  useEffect(() => {
    import("../../data/carousel_new_section").then(
      ({ NewSectionInfo: data }) => {
        setState((prevState) => ({
          ...prevState,
          title: data.sectionTitle,
          slides: data.slides,
          animationKey: Math.random(),
          labels: data.slides.map((slide) => slide.label),
          loading: false,
        }));
      }
    );
  }, []);

  const handleStep = (step) => {
    setState((prevState) => ({
      ...prevState,
      activeStep: step,
    }));
  };

  if (loading) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">...Loading</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <SubTitle sx={{ display: "none" }} text={title} />
      <Carousel slide={slides[activeStep]} animationKey={animationKey}>
        <Stepper
          handleStep={handleStep}
          activeStep={activeStep}
          labels={labels}
        />
      </Carousel>
    </Container>
  );
};

export default SectionContainer;
