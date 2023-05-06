module.exports = {
  name: 'ping',
  description: 'Replies with Pong!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],

  callback: async (tedsbot, interaction) => {
    await interaction.deferReply();
    const reply = await interaction.fetchReply();
    const ping = reply.createdTimestamp - interaction.createdTimestamp;

    interaction.editReply(
      `Pong! Client: ${ping}ms | Websocket: ${tedsbot.ws.ping}ms`
    );
  },
};
