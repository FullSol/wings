const twitchEmbedUrl = (channel) => {
  const hostName = window.location.hostname;
  const parent = hostName.includes("localhost")
    ? "localhost"
    : "www.wingsguild.com";
  return `https://player.twitch.tv/?channel=${channel}&parent=${parent}`;
};

export { twitchEmbedUrl };
