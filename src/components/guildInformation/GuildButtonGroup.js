<<<<<<< Updated upstream
import React from "react";
import { Tooltip, ButtonGroup } from "@mui/material";
import GuildButton from "./GuildButton";

const GuildButtonGroup = ({ buttons, tooltip, color }) => {
  const renderGroup = () => {
    if (tooltip) {
      return (
        <Tooltip title={tooltip}>
          <ButtonGroup color={color}>
            {buttons.map((button) => (
              <GuildButton
                key={button.id}
                content={button.label}
                link={button.link}
                tooltip={button.tooltip}
              />
            ))}
          </ButtonGroup>
        </Tooltip>
      );
    }

    // If no tooltip
    return (
      <ButtonGroup color={color}>
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

  return renderGroup();
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
