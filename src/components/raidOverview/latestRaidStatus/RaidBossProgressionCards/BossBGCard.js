import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Paper, Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Switching the theme mode to 'dark'
    success: {
      main: "#008001",
    },
  },
});

const BossBGCard = ({
  name,
  title,
  imgLocation,
  progress,
  pulls,
  status,
  date,
}) => {
  const determineBorderStyle = () => {
    if (status === "killed") {
      return "6px solid red";
    } else if (status === "progressing" && pulls > 0) {
      return "6px solid yellow";
    }
    return "6px solid green";
  };

  return (
    <Grid xs={12} md={6} lg={4}>
      <ThemeProvider theme={darkTheme}>
        <Paper
          sx={{
            borderBottomLeftRadius: 0,
            borderLeft: determineBorderStyle(),
          }}
          elevation={5}
        >
          <Grid
            container
            sx={{
              display: { xs: "flex" },
              flexDirection: "row",
              p: 2,
              flexWrap: "nowrap",
              backgroundImage: `url(${imgLocation})`,
              backgroundAttachment: "scroll",
              backgroundPosition: "95%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            }}
            xs={12}
          >
            <Grid
              sx={{
                width: "100%",
              }}
            >
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  flexWrap: "nowrap",
                }}
                spacing={1}
                xs={12}
              >
                <Grid xs={12}>
                  <Typography variant="h5">{name}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography>{`Status: ${
                    status === "killed" ? "Dead" : "Alive"
                  } / Pulls: ${pulls}`}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography>
                    <LinearProgress
                      variant="determinate"
                      color="success"
                      value={100 - progress}
                      sx={{ height: "15px", width: "70%" }}
                    />
                  </Typography>
                </Grid>
                {date && date.getTime() > 0 && (
                  <Grid>
                    <Typography>
                      First Killed:{" "}
                      {date.toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default BossBGCard;

BossBGCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  imgLocation: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  pulls: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.object,
};
