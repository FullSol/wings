import React, { useReducer, useEffect } from "react";
import GuildInformationLayout from "./GuildInformationLayout";
import Loading from "../loading/Loading";

const initialState = {
  guildData: null,
  isLoading: true,
  error: null,
};

function guildReducer(state, action) {
  switch (action.type) {
    case "SET_GUILD_DATA":
      return { ...state, guildData: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error();
  }
}

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
