module.exports = {
  name: 'links',
  description: 'Returns all the important links!',
  // options: Object[],

  callback: (tedsbot, interaction) => {
    interaction.reply(`Pong! ${tedsbot.ws.ping}ms`);
  },
};
