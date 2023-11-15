import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import GuildButtonGroup from "./GuildButtonGroup";

const GuildButtonGroups = ({ buttons, tooltip, color }) => {
  const renderGroup = () => {
    if (tooltip) {
      return (
        <Tooltip title={tooltip}>
          <GuildButtonGroup color={color} buttons={buttons} />
        </Tooltip>
      );
    }

    // If no tooltip
    return <GuildButtonGroup color={color} buttons={buttons} />;
  };

  return renderGroup();
};

export default GuildButtonGroups;

GuildButtonGroups.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  tooltip: PropTypes.string,
  color: PropTypes.string.isRequired,
};
