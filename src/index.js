require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const tedsbot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildEmojisAndStickers,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.GuildWebhooks,
    IntentsBitField.Flags.MessageContent,
  ],
});

client = tedsbot;

tedsbot.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online`);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === "ping") {
      interaction.reply("Pong!");
    }
  }
});

tedsbot.login(process.env.TOKEN);
