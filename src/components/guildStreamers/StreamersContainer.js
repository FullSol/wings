import React, { useReducer, useEffect } from "react";
import { streamerReducer, initialState } from "../../reducers/streamerReducer";
import { twitchEmbedUrl } from "../../utils/twitchUtils";
import StreamerLayout from "./StreamerLayout";
import Loading from "../loading/Loading";
import { fetchWingsData } from "../../utils/fetchUtils";

const StreamersContainer = () => {
  const [state, dispatch] = useReducer(streamerReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from wings api
        const data = await fetchWingsData("api/streamers");

        // Create the player's url for each streamer
        const processedStreamInfo = data.map((streamer) => {
          return {
            ...streamer,
            twitchEmbedUrl: twitchEmbedUrl(streamer.channel),
          };
        });

        // Dispatch to streamer reducer
        dispatch({ type: "SET_STREAMER_DATA", payload: processedStreamInfo });
      } catch (error) {
        console.error("Failed to fetch streamer data:", error);

        // Dispatch to streamer reducer
        dispatch({ type: "SET_ERROR", payload: error });
      }
    };

    fetchData();
  }, []);

  if (state.isLoading) {
    return <Loading />;
  }

  return <StreamerLayout streamers={state.streamerData} />;
};

export default StreamersContainer;
