const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  PermissionsBitField,
} = require('discord.js');

module.exports = {
  name: 'kick',
  description: 'Kicks a member from the server.',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // deleted: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to kick',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for the kick',
      required: false,
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.KickMembers],
  botPermissions: [PermissionFlagsBits.KickMembers],

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
        "You can't kick that user as they have the same / higher role than you."
      );
      return;
    }

    if (targetUserRolePosition >= botRolePosition) {
      await interaction.editReply(
        'I cannot kick that user as they have the same / higher role than me.'
      );
      return;
    }

    // Kick
    try {
      await targetUser.kick(reason);
      await interaction.editReply(
        `User ${targetUser} was kicked!\nReason: ${reason}`
      );
    } catch (error) {
      console.log(`There was an error attempting to kick a user: ${error}`);
    }
  },
};
