const {
  ApplicationCommandOptionType,
  Client,
  Interaction,
  ActivityType,
} = require('discord.js');
module.exports = {
  name: 'dev-mode',
  description: '[DEV ONLY] Activates Dev mode',
  devOnly: true,
  // testOnly: Boolean,
  options: [],
  /**
   *
   * @param {Client} tedsbot
   * @param {Interaction} interaction
   */
  callback: async (tedsbot, interaction) => {
    await interaction.deferReply();

    if (tedsbot.user.presence.status === 'online') {
      tedsbot.user.setActivity({
        name: 'DEV MODE | tedps.tk',
        type: ActivityType.Playing,
      });
      tedsbot.user.setStatus('idle');

      interaction.editReply('Dev Mode Activated!');
      return;
    } else {
      tedsbot.user.setActivity({
        name: 'tedps.tk',
        type: ActivityType.Watching,
      });
      tedsbot.user.setStatus('online');

      interaction.editReply('Dev Mode Deactivated!');
      return;
    }
  },
};
