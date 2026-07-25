require("dotenv").config();

const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.once("ready", async () => {
  console.log(`${client.user.tag} is online!`);

  client.user.setActivity("AS Crista", {
    type: ActivityType.Watching,
  });

  const guild = await client.guilds.fetch("1526091589565284422");
  const channel = await guild.channels.fetch("1529127236039610549");

  joinVoiceChannel({
    channelId: "1529127236039610549",
    guildId: "1526091589565284422",
    adapterCreator: guild.voiceAdapterCreator,
    selfDeaf: false,
    selfMute: false,
  });

  console.log("Joined Voice Channel!");
});

client.login(process.env.TOKEN);
