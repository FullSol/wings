import React from "react";
import NewsCard from "./NewsCard";
import Grid from "@mui/material/Unstable_Grid2";

const NewsCards = ({ cards }) => {
  return (
    <Grid container xs={12} spacing={4}>
      {/* Reverse the car sequence and limit to 4 */}
      {[...cards] // copy the array
        .reverse() // reverse the array - handy
        .slice(0, 4) // cut it down to 4
        .map((card) => {
          return (
            <Grid key={card.id} xs={12} sm={6} md={6} lg={3}>
              <NewsCard card={card} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default NewsCards;
