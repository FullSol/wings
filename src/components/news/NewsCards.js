import React from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Unstable_Grid2";

const NewsCards = ({ cards }) => {
  return (
    <Grid container xs={12} spacing={2}>
      {cards.map((card) => {
        return (
          <Grid xs={12} sm={6} md={6} lg={3}>
            <NewsCard card={card} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NewsCards;
