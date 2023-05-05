require("dotenv").config();
const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const tedsbot = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

client = tedsbot;

const roles = [
    {
        id: '1104141856264159292',
        label: 'pink'
    }
]

tedsbot.on("ready", async (c) => {
  try {
    const channel = await tedsbot.channels.cache.get('1104142574253510696');
    if (!channel) return;

    const row = new ActionRowBuilder();

    roles.forEach((role) => {
        row.components.push(
            new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
        )
    });

    await channel.send({
        content: 'Claim or remove a role below!',
        components: [row],
    });
    process.exit();
  } catch (error) {
    console.log(error);
  }
});

tedsbot.login(process.env.TOKEN);
