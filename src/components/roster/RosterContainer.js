import React, { useReducer, useEffect } from "react";
import { rosterReducer, initialState } from "../../reducers/rosterReducer.js";
import Loading from "../loading/Loading.js";
import RosterLayout from "./RosterLayout.js";

const RosterContainer = () => {
  const [state, dispatch] = useReducer(rosterReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { RosterInfo } = await import("../../data/rosterInfo.js");
        dispatch({ type: "SET_ROSTER_DATA", payload: RosterInfo });
      } catch (error) {
        console.log("Failed to fetch roster date:", error);
        dispatch({ type: "SET_ERROR", payload: error });
      }
    };

    fetchData();
  }, []);

  if (state.isLoading) {
    return <Loading />;
  }

  return <RosterLayout rosterData={state.rosterData} />;
};

export default RosterContainer;
