import Logo from "../media/wings-logo-ai.png";
import WarcraftLogs from "../media/icons/warcraft-logs-logo.png";
import WowArmory from "../media/icons/warcraft-icon.png";
import Curse from "../media/icons/curse-icon.png";
import RaiderIO from "../media/icons/raiderio_logo.png";

const buttonColor = "info";

export const GuildInfo = {
  name: "Wings",
  realm: "Area 52",
  faction: "Alliance",
  region: "US",
  logo: Logo,
  about:
    "We are a Cutting Edge guild aiming for efficient progression through each tier, with the goal of achieving Cutting Edge in a timely manner. The guild seeks to perform at a high level on a 3-night schedule while maintaining an atmosphere where people want to log on outside the raid. We are a community where we pride ourselves on maintaining a tight-knit group with a common competitive mindset. The guild boasts an active community that often runs Mythic+ together or plays other games. We raid Tuesday-Thursday from 9-12 PM EST.",
  interests: {
    tooltip: "Guild Interests",
    color: buttonColor,
    buttons: [
      { id: 1, label: "Raiding" },
      { id: 2, label: "Mythic Plus" },
    ],
  },
  mindset: {
    color: buttonColor,
    buttons: [{ id: 1, label: "Cutting Edge" }],
  },
  apply: {
    color: buttonColor,
    buttons: [
      {
        id: 1,
        label: "Apply",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfBu7P9KPVgwy5K3nNIxhHFvJtKxNmqmiNcdknsrB8H0T8m2A/viewform",
        tooltip: "Always accepting talented players",
      },
    ],
  },
  reportingSites: {
    color: buttonColor,
    buttons: [
      {
        id: 1,
        name: "Warcraft Logs",
        link: "https://www.warcraftlogs.com/guild/id/707417",
        label: { image: WarcraftLogs, alt: "Warcraft Logs" },
        tooltip: "Warcraft Logs",
      },
      {
        id: 2,
        name: "Wow Armory",
        link: "https://worldofwarcraft.blizzard.com/en-us/guild/us/area-52/wings",
        label: { image: WowArmory, alt: "Wow Armory" },
        tooltip: "Wow Armory",
      },
      {
        id: 3,
        name: "Wow Progress",
        link: "https://www.wowprogress.com/guild/us/area-52/Wings",
        label: { image: Curse, alt: "Wow Progress" },
        tooltip: "Wow Progress",
      },
      {
        id: 4,
        name: "Raider.io",
        link: "https://raider.io/guilds/us/area-52/Wings",
        label: { image: RaiderIO, alt: "Raider.io" },
        tooltip: "Raider.io",
      },
    ],
  },
};
