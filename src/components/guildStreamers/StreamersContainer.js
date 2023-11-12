import React, { useReducer, useEffect } from "react";
import { streamerReducer, initialState } from "../../reducers/streamerReducer";
import { twitchEmbedUrl } from "../../utils/twitchUtils";
import StreamerLayout from "./StreamerLayout";
import Loading from "../loading/Loading";

const StreamersContainer = () => {
  const [state, dispatch] = useReducer(streamerReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { StreamerInfo } = await import("../../data/streamerInfo");

        const processedStreamInfo = StreamerInfo.map((streamer) => {
          return {
            ...streamer,
            twitchEmbedUrl: twitchEmbedUrl(streamer.channel),
          };
        });

        dispatch({ type: "SET_STREAMER_DATA", payload: processedStreamInfo });
      } catch (error) {
        console.error("Failed to fetch streamer data:", error);
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
