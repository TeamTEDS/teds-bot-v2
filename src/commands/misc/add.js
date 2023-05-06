module.exports = {
  name: 'add',
  description: 'Adds 2 numbers together!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: (tedsbot, interaction) => {
    interaction.reply(`Pong! ${tedsbot.ws.ping}ms`);
  },
};
