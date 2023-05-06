const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: 'add',
  description: 'Adds 2 numbers together!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'first-number',
      description: 'The first number',
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    {
      name: 'second-number',
      description: 'The second number',
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
  ],

  callback: (tedsbot, interaction) => {
    interaction.deferReply();
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    if (num1 == 9 && num2 == 10) {
      interaction.reply(`${num1} + ${num2} = 21`);
    } else interaction.reply(`${num1} + ${num2} = ${num1 + num2}`);
  },
};
