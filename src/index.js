require('dotenv').config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActivityType,
} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const mongoose = require('mongoose');

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

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    eventHandler(tedsbot);

    tedsbot.login(process.env.TOKEN);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();
