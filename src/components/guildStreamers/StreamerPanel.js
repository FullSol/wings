import React from "react";

const StreamerPanel = ({ name, twitchEmbedUrl, height }) => {
  const panelHeight = height || "100%";
  return (
    <iframe
      title={name}
      src={twitchEmbedUrl}
      height={panelHeight}
      width="100%"
      allowFullScreen
    ></iframe>
  );
};

export default StreamerPanel;
