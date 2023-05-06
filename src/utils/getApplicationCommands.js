module.exports = async (tedsbot, guildId) => {
  let applicationCommands;

  if (guildId) {
    const guild = await tedsbot.guilds.fetch(guildId);
    applicationCommands = guild.commands;
  } else {
    applicationCommands = await tedsbot.application.commands;
  }

  await applicationCommands.fetch();
  return applicationCommands;
};
