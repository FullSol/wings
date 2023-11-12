import React, { useReducer, useEffect } from "react";
import { guildReducer, initialState } from "../../reducers/guildReducer";
import GuildInformationLayout from "./GuildInformationLayout";
import Loading from "../loading/Loading";

const GuildInformationContainer = () => {
  const [state, dispatch] = useReducer(guildReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { GuildInfo } = await import("../../data/guildInfo");
        dispatch({ type: "SET_GUILD_DATA", payload: GuildInfo });
      } catch (error) {
        console.error("Failed to fetch guild data:", error);
        dispatch({ type: "SET_ERROR", payload: error });
      }
    };

    fetchData();
  }, []);

  // If guildInfo is not yet loaded, render a loading indicator
  if (state.isLoading) {
    return <Loading height="100vh" />;
  }

  return <GuildInformationLayout info={state.guildData} />;
};

export default GuildInformationContainer;
