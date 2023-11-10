import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NewsCards from "./NewsCards";

const NewsLayout = ({ newsData }) => {
  return (
    <Container maxWidth="xl" sx={{ pt: 8, pb: 8 }}>
      <Grid container>
        <Grid>
          <NewsCards cards={newsData.items} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsLayout;

NewsLayout.propTypes = {};
