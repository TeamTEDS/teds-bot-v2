module.exports = {
  name: 'links',
  description: 'Returns all the important links!',
  // options: Object[],

  callback: (tedsbot, interaction) => {
    const embed = new EmbedBuilder()
      .setTitle('Links')
      .setColor('990000')
      .addFields(
        {
          name: 'TeamTEDS',
          value: `[Website](https://tedps.tk)\n[Discord](https://discord.gg/rMqJ9gsSrU)\n[Twitter](https://twitter.com/teamteds)\n[Github](https://github.com/TeamTEDS)`,
        },
        {
          name: 'DovydasTEDS',
          value: `[Twitter](https://twitter.com/dovydasteds)\n[Github](https://github.com/DovydasTEDS)\n[Reddit](https://reddit.com/user/DovydasTEDS)\n[Steam](https://steamcommunity.com/id/dovydasteds)\n[Youtube](https://youtube.com/@dovydasteds)`,
        }
      );

    interaction.reply({ embeds: [embed] });
  },
};
