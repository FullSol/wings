import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

const NewsCard = ({ card }) => {
  const date = new Date(card.date);

  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              WoW
            </Avatar>
          }
          title={card.title}
          subheader={date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
        <CardMedia
          component="img"
          height="194"
          image={card.image}
          alt={card.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default NewsCard;
