module.exports = {
  name: 'ping',
  description: 'Replies with Pong!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: (tedsbot, interaction) => {
    interaction.reply(`Pong! ${tedsbot.ws.ping}ms`);
  },
};
