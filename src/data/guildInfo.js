import Logo from "../media/wings-logo-ai.png";
import WarcraftLogs from "../media/icons/warcraft-logs-logo.png";
import WowArmory from "../media/icons/warcraft-icon.png";
import Curse from "../media/icons/curse-icon.png";
import RaiderIO from "../media/icons/raiderio_logo.png";

export const GuildInfo = {
  name: "Wings",
  realm: "Area 52",
  faction: "Alliance",
  region: "US",
  logo: Logo,
  about:
    "We are a Cutting Edge guild aiming for efficient progression through each tier, with the goal of achieving Cutting Edge in a timely manner. The guild seeks to perform at a high level on a 3-night schedule while maintaining an atmosphere where people want to log on outside the raid. We are a community where we pride ourselves on maintaining a tight-knit group with a common competitive mindset. The guild boasts an active community that often runs Mythic+ together or plays other games. We raid Tuesday-Thursday from 9-12 PM EST.",
  interests: ["Raiding", "Mythic Plus"],
  mindset: ["Cutting Edge"],
  apply: {
    label: "Apply",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfBu7P9KPVgwy5K3nNIxhHFvJtKxNmqmiNcdknsrB8H0T8m2A/viewform",
  },
  reportingSites: [
    {
      name: "Warcraft Logs",
      link: "https://www.warcraftlogs.com/guild/id/707417",
      image: WarcraftLogs,
    },
    {
      name: "Wow Armory",
      link: "https://worldofwarcraft.blizzard.com/en-us/guild/us/area-52/wings",
      image: WowArmory,
    },
    {
      name: "Wow Progress",
      link: "https://www.wowprogress.com/guild/us/area-52/Wings",
      image: Curse,
    },
    {
      name: "Raider.io",
      link: "https://raider.io/guilds/us/area-52/Wings",
      image: RaiderIO,
    },
  ],
};
