import React, { useReducer, useEffect } from "react";
import { raidReducer, initialState } from "../../reducers/raidReducer";
import PastRaidSummary from "./pastRaidSummary/PastRaidsSummary";
import LatestRaidStatus from "./latestRaidStatus/LatestRaidStatus";
import Loading from "../loading/Loading";
import { fetchWingsData } from "../../utils/fetchUtils";

const RaidProgressionContainer = () => {
  const [state, dispatch] = useReducer(raidReducer, initialState);

  useEffect(() => {
    // Fetch the data here and update the state
    const loadData = async () => {
      try {
        // Fetch data from wings api
        const data = await fetchWingsData("api/raid");

        // Dispatch to the raid reducer
        dispatch({ type: "SET_RAID_DATA", payload: data });
      } catch (error) {
        console.error("Failed to fetch raid data:", error);

        // Dispatch to the raid reducer
        dispatch({ type: "SET_ERROR", payload: error });
      }
    };

    loadData();
  }, []);

  // Determine the highest difficulty progression has started on
  const getDifficulty = (raid) => {
    const difficultyOrder = ["mythic", "heroic", "normal"]; // Ordered highest to lowest
    let highestDifficultyKilled = "";

    // Iterate over each boss
    raid.bosses?.forEach((boss) => {
      // Check each difficulty for the current boss starting from the highest
      for (const difficulty of difficultyOrder) {
        if (boss.difficulties[difficulty].status === "killed") {
          if (highestDifficultyKilled === "") {
            highestDifficultyKilled = difficulty;
            break;
          } else {
            break;
          }
        }
      }
    });

    return highestDifficultyKilled;
  };

  // If raidData is not yet loaded, render a loading indicator
  if (state.isLoading) {
    return <Loading />;
  }

  // Latest raid would be the last item in the array of raid data
  const latestRaid = state.raidData[state.raidData.length - 1];
  const difficulty = getDifficulty(latestRaid);

  return (
    <>
      <LatestRaidStatus latestRaid={latestRaid} difficulty={difficulty} />
      <PastRaidSummary raids={state.raidData} />
    </>
  );
};

export default RaidProgressionContainer;
