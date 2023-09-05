const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('社交媒體')
        .setDescription('我們的社交媒體'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`我們的社交媒體！`)
            .setDescription(`我們的社交媒體列表：`)
            .setColor(0xFFFFFF)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://www.youtube.com/@ggtyNetwork`,
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL(`https://twitter.com/ggtynetwork`)
            .setFields([
                {
                    name: `Test Field 1`,
                    value: `Test Field value 1`,
                    inline: true
                },
                {
                    name: `Test Field 2`,
                    value: `Test Field value 2`,
                    inline: true
                }
            ]);

            await interaction.reply({
                embeds: [embed]
            });
    },
};