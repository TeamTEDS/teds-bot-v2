// Example POST method implementation:
async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      Accept: 'text/plain',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.text(); // parses JSON response into native JavaScript objects
}

const {
  ApplicationCommandOptionType,
  Client,
  Interaction,
} = require('discord.js');
module.exports = {
  name: 'joke',
  description: 'Gets a joke',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [],
  /**
   *
   * @param {Client} tedsbot
   * @param {Interaction} interaction
   */
  callback: async (tedsbot, interaction) => {
    await interaction.deferReply();
    const returned = await getData(`https://icanhazdadjoke.com/`);
    interaction.editReply(returned);
  },
};
