import { React } from "react";
import { PropTypes } from "prop-types";
import { Container, Typography } from "@mui/material";

const Loading = ({ height }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">...Loading</Typography>
    </Container>
  );
};

export default Loading;

Loading.propTypes = { height: PropTypes.string.isRequired };
