import React, { useState, useEffect } from "react";
import GuildInformationWrapper from "./GuildInformationWrapper";

const GuildInformationContainer = () => {
  const [guildInfo, setGuildInfo] = useState(null);

  useEffect(() => {
    // Fetch the data here and update the state
    const fetchData = async () => {
      try {
        const { GuildInfo } = await import("../../data/guildInfo");
        console.log(GuildInfo);
        setGuildInfo({
          name: GuildInfo.name,
          realm: GuildInfo.realm,
          faction: GuildInfo.faction,
          region: GuildInfo.region,
          logo: GuildInfo.logo,
          about: GuildInfo.about,
          interests: GuildInfo.interests,
          mindset: GuildInfo.mindset,
          progressionLevel: GuildInfo.progressionLevel,
          apply: GuildInfo.apply,
          reportingSites: GuildInfo.reportingSites,
        });
      } catch (error) {
        console.error("Failed to fetch raid data:", error);
      }
    };

    fetchData();
  }, []);

  // If guildInfo is not yet loaded, render a loading indicator
  if (!guildInfo) {
    return <div>Loading...</div>;
  }

  return <GuildInformationWrapper info={guildInfo} />;
};

export default GuildInformationContainer;
