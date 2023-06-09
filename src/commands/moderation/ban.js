const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  PermissionsBitField,
} = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Bans a member from the server.',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // deleted: Boolean,
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
  permissionsRequired: [PermissionFlagsBits.BanMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],

  callback: async (tedsbot, interaction) => {
    const targetUserId = interaction.options.get('target-user').value;
    const reason =
      interaction.options.get('reason')?.value || 'No reason provided';

    await interaction.deferReply();

    const targetUser = await interaction.guild.members.fetch(targetUserId);
    if (!targetUser) {
      await interaction.editReply('That user is not in this server.');
      return;
    }

    const targetUserRolePosition = targetUser.roles.highest.position;
    const requestUserRolePosition = interaction.member.roles.highest.position;
    const botRolePosition = interaction.guild.members.me.roles.highest.position;

    if (targetUserRolePosition >= requestUserRolePosition) {
      await interaction.editReply(
        "You can't ban that user as they have the same / higher role than you."
      );
      return;
    }

    if (targetUserRolePosition >= botRolePosition) {
      await interaction.editReply(
        'I cannot ban that user as they have the same / higher role than me.'
      );
      return;
    }

    // Ban
    try {
      await targetUser.ban({ reason });
      await interaction.editReply(
        `User ${targetUser} was banned!\nReason: ${reason}`
      );
    } catch (error) {
      console.log(`There was an error attempting to ban a user: ${error}`);
    }
  },
};
