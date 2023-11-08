import React, { useState, useEffect } from "react";
import PastRaidSummary from "./PastRaidsSummary";
import LatestRaidStatus from "./LatestRaidStatus";

const RaidProgressionContainer = () => {
  const [raidData, setRaidData] = useState(null);

  useEffect(() => {
    // Fetch the data here and update the state
    const fetchData = async () => {
      try {
        // Here we're directly awaiting the import promise to resolve and destructuring the default export
        const { ProgressionInfo } = await import("../../data/progressionInfo");
        setRaidData(ProgressionInfo);
      } catch (error) {
        console.error("Failed to fetch raid data:", error);
      }
    };

    fetchData();
  }, []);

  // Determine the highest difficulty progression has started on
  const getDifficulty = (raid) => {
    console.log(raid);
    const difficultyOrder = ["mythic", "heroic", "normal"]; // Ordered highest to lowest
    let highestDifficultyKilled = difficultyOrder[difficultyOrder.length - 1]; // Start with the lowest difficulty

    // Iterate over each boss
    raid.bosses?.forEach((boss) => {
      // Check each difficulty for the current boss starting from the highest
      for (const difficulty of difficultyOrder) {
        if (boss.difficulties[difficulty].status === "killed") {
          highestDifficultyKilled = difficulty;
          break; // Stop checking lower difficulties if a higher one is killed
        }
      }
    });

    return highestDifficultyKilled;
  };

  // If raidData is not yet loaded, render a loading indicator
  if (!raidData) {
    return <div>Loading...</div>;
  }

  // Latest raid would be the last item in the array of raid data
  const latestRaid = raidData[raidData.length - 1];
  const difficulty = getDifficulty(latestRaid);

  return (
    <>
      <LatestRaidStatus latestRaid={latestRaid} difficulty={difficulty} />
      <PastRaidSummary raids={raidData} />
    </>
  );
};

export default RaidProgressionContainer;
