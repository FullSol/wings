import React, { useState, useEffect } from "react";
import StreamerWrapper from "./StreamerWrapper";

const StreamersContainer = () => {
  const [streamerData, setStreamerData] = useState();

  const twitchEmbedUrl = (channel) => {
    const hostName = window.location.hostname;

    const parent = hostName.includes("localhost")
      ? "localhost"
      : "www.wingsguild.com";

    return `https://player.twitch.tv/?channel=${channel}&parent=${parent}`;
  };

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
        console.log(processedStreamInfo);
        setStreamerData(processedStreamInfo);
      } catch (error) {
        console.error("Failed to fetch streamer data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(streamerData);

  if (!streamerData) {
    return <div>Loading...</div>;
  }

  return <StreamerWrapper streamers={streamerData} />;
};

export default StreamersContainer;
