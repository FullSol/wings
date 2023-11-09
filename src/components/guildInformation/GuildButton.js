import React from "react";
import { Tooltip, Button, Box } from "@mui/material";

const GuildButtonGroup = ({ content, link, tooltip, image }) => {
  let processedContent = null;

  // Styling for buttons that have no link
  const noLinkButton = {
    textDecoration: "none",
    cursor: "default",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "inherit",
      border: ".5px solid inherit",
    },
  };

  // Check if the content is a string
  typeof content === "string"
    ? (processedContent = content)
    : (processedContent = (
        <Box component="img" src={content.image} alt={content.name} />
      ));

  const renderButton = () => {
    // Case when both tooltip and link are present
    if (tooltip && link) {
      return (
        <Tooltip title={tooltip}>
          <Button href={link} target="_blank" rel="noreferrer">
            {processedContent}
          </Button>
        </Tooltip>
      );
    }

    // Case when only tooltip is present
    if (tooltip) {
      return (
        <Tooltip title={tooltip}>
          <Button sx={noLinkButton}>{processedContent}</Button>
        </Tooltip>
      );
    }

    // Case when only link is present
    if (link) {
      return (
        <Button href={link} target="_blank" rel="noreferrer">
          {processedContent}
        </Button>
      );
    }

    // Case when neither tooltip nor link is present
    return <Button sx={noLinkButton}>{processedContent}</Button>;
  };

  return renderButton();
};

export default GuildButtonGroup;

GuildButtonGroup.propTypes = {};
