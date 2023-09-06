const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('延遲')
        .setDescription('機器人延遲'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newEmbed = new EmbedBuilder()
            .setTitle('Pong! 🏓')
            .setDescription('這是機器人的API延遲和客服端延遲！:')
            .setColor(0x32cd32)
            .setThumbnail("https://i.pinimg.com/originals/dd/c2/f1/ddc2f1044c2c0a7ee5f1861a4ad9e043.gif")
            .setTimestamp(Date.now())
            .setAuthor({
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setFields([
                {
                    name: 'API延續',
                    value: `${client.ws.ping} ms`,
                },
                {
                    name: '客戶端延遲',
                    value: `${message.createdTimestamp - interaction.createdTimestamp}ms`,
                }
            ])
            await interaction.editReply({
                embeds: [newEmbed],
            });
    }
}