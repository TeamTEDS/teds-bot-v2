const { testServer } = require('../../../config.json');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (tedsbot) => {
  try {
    const localCommands = getLocalCommands();
    const applicationCommands = getApplicationCommands(tedsbot, testServer);

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`🗑️ Deleted command "${name}"`);
          continue;
        }
      }
    }
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};
