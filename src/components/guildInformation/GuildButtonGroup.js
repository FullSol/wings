<<<<<<< Updated upstream
import React from "react";
import { ButtonGroup } from "@mui/material";
import GuildButton from "./GuildButton";

const GuildButtonGroup = ({ buttons, color }) => {
  return (
    <ButtonGroup color={color}>
      {/* TODO: theme.palette.alliance */}
      {buttons.map((button) => (
        <GuildButton
          key={button.id}
          content={button.label}
          link={button.link}
          tooltip={button.tooltip}
        />
      ))}
    </ButtonGroup>
  );
};
=======
import React, { forwardRef } from "react";
import { ButtonGroup } from "@mui/material";
import GuildButton from "./GuildButton";

const GuildButtonGroup = forwardRef(({ buttons, color }, ref) => {
  return (
    <ButtonGroup ref={ref} color={color}>
      {/* TODO: theme.palette.alliance */}
      {buttons.map((button) => (
        <GuildButton
          key={button.id}
          content={button.label}
          link={button.link}
          tooltip={button.tooltip}
        />
      ))}
    </ButtonGroup>
  );
});
>>>>>>> Stashed changes

export default GuildButtonGroup;

GuildButtonGroup.propTypes = {};
