const {
  ApplicationCommandOptionType,
  PermissionFlagBits,
} = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Bans a member from the server.',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to ban',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for the ban',
      required: false,
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagBits.BanMembers],

  callback: (tedsbot, interaction) => {
    interaction.reply('ban??');
  },
};
