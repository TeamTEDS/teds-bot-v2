const ActivityType = require('discord.js');

module.exports = (tedsbot) => {
  tedsbot.user.setActivity({
    name: 'tedps.tk',
    type: ActivityType.Watching,
  });
};
