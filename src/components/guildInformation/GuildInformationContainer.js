import React, { useState, useEffect } from "react";
import GuildInformationLayout from "./GuildInformationLayout";

const GuildInformationContainer = () => {
  const [guildData, setGuildData] = useState(null);

  useEffect(() => {
    // Fetch the data here and update the state
    const fetchData = async () => {
      try {
        const { GuildInfo } = await import("../../data/guildInfo");

        setGuildData({
          ...GuildInfo,
        });
      } catch (error) {
        console.error("Failed to fetch raid data:", error);
      }
    };

    fetchData();
  }, []);

  // If guildInfo is not yet loaded, render a loading indicator
  if (!guildData) {
    return <div>Loading...</div>;
  }

  return <GuildInformationLayout info={guildData} />;
};

export default GuildInformationContainer;
