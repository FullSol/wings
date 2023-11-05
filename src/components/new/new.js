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
    preloadedImages: {},
    loading: true,
  });

  const {
    loading,
    title,
    slides,
    animationKey,
    activeStep,
    labels,
    preloadedImages,
  } = state;

  useEffect(() => {
    const preloadImages = (slides) => {
      return slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = require(`../../media/${slide.imgLocation}`);
          img.onload = () => {
            resolve({ [slide.imgLocation]: img });
          };
          img.onerror = (error) => {
            console.error(`Failed to load ${slide.imgLocation}`, error); // Log on error
            reject(error);
          };
        });
      });
    };

    import("../../data/carousel_new_section").then(
      ({ NewSectionInfo: data }) => {
        Promise.all(preloadImages(data.slides))
          .then((images) => {
            const loadedImages = images.reduce(
              (acc, image) => ({ ...acc, ...image }),
              {}
            );

            setState((prevState) => ({
              ...prevState,
              title: data.sectionTitle,
              slides: data.slides,
              animationKey: Math.random(),
              labels: data.slides.map((slide) => slide.label),
              preloadedImages: loadedImages,
              loading: false,
            }));
          })
          .catch((error) => {
            console.error("Error preloading images:", error);
          });
      }
    );
  }, []);

  useEffect(() => {
    // Set up an interval to auto-advance the carousel every 5 seconds
    const intervalId = setInterval(() => {
      autoStepper();
    }, 5000);

    // Clean up the interval on component unmount or when activeStep changes
    return () => clearInterval(intervalId);
  }, [activeStep]); // Depend on activeStep to reset the interval when it changes

  const autoStepper = () => {
    setState((prevState) => {
      // If we've reached the last slide, go back to the first one; otherwise, advance one step
      const nextStep =
        prevState.activeStep + 1 === prevState.slides.length
          ? 0
          : prevState.activeStep + 1;

      // Return the updated state
      return {
        ...prevState,
        activeStep: nextStep,
        // Update the animationKey if needed to trigger animations
        animationKey: Math.random(),
      };
    });
  };

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
      <Carousel
        slide={slides[activeStep]}
        animationKey={animationKey}
        border={slides[activeStep].border}
        preloadedImages={preloadedImages}
      >
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
