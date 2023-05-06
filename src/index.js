require('dotenv').config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActivityType,
} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

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

eventHandler(tedsbot);

tedsbot.on('interactionCreate', async (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'add') {
      const num1 = interaction.options.get('first-number').value;
      const num2 = interaction.options.get('second-number').value;

      if (num1 == 9 && num2 == 10) {
        interaction.reply(`${num1} + ${num2} = 21`);
      } else interaction.reply(`${num1} + ${num2} = ${num1 + num2}`);
    }
    if (interaction.commandName === 'links') {
      const embed = new EmbedBuilder()
        .setTitle('Links')
        .setColor('990000')
        .addFields(
          {
            name: 'TeamTEDS',
            value: `[Website](https://tedps.tk)\n[Discord](https://discord.gg/rMqJ9gsSrU)\n[Twitter](https://twitter.com/teamteds)\n[Github](https://github.com/TeamTEDS)`,
          },
          {
            name: 'DovydasTEDS',
            value: `[Twitter](https://twitter.com/dovydasteds)\n[Github](https://github.com/DovydasTEDS)\n[Reddit](https://reddit.com/user/DovydasTEDS)\n[Steam](https://steamcommunity.com/id/dovydasteds)\n[Youtube](https://youtube.com/@dovydasteds)`,
          }
        );

      interaction.reply({ embeds: [embed] });
    }
  }

  try {
    if (interaction.isButton()) {
      await interaction.deferReply({ ephemeral: true });

      const role = interaction.guild.roles.cache.get(interaction.customId);
      if (!role) {
        interaction.editReply({
          content: 'Role not found!',
        });
        return;
      }

      const hasRole = interaction.member.roles.cache.has(role.id);

      if (hasRole) {
        await interaction.member.roles.remove(role);
        await interaction.editReply(`The role ${role} has been removed.`);
        return;
      }

      await interaction.member.roles.add(role);
      await interaction.editReply(`The role ${role} has been added.`);
    }
  } catch (error) {
    console.log(error);
  }
});

tedsbot.login(process.env.TOKEN);
