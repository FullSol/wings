import React from "react";
import PropTypes from "prop-types";
import { Box, Stepper, Step, StepButton } from "@mui/material";

const NonLinearStepper = ({ handleStep, activeStep, labels }) => {
  const handleStepClick = (step) => () => {
    handleStep(step);
  };

  return (
    <Box sx={{ width: "100%", position: "absolute", bottom: 75 }}>
      <Stepper nonLinear activeStep={activeStep}>
        {labels.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStepClick(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

NonLinearStepper.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  handleStep: PropTypes.func.isRequired,
  activeStep: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NonLinearStepper;
