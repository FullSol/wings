import React from "react";
import { Tooltip, ButtonGroup } from "@mui/material";
import GuildButton from "./GuildButton";

const GuildButtonGroup = ({ buttons, tooltip }) => {
  const renderGroup = () => {
    if (tooltip) {
      return (
        <Tooltip title={tooltip}>
          <ButtonGroup color="info">
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
      <ButtonGroup color="info">
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

export default GuildButtonGroup;

GuildButtonGroup.propTypes = {};
