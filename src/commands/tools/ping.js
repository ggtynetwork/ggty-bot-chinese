const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('查看機器人的ping'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newEmbed = new EmbedBuilder()
            .setTitle('pong！ 🏓')
            .setDescription('這個機器人的 API 延遲和客戶端 Ping:')
            .setColor(0x32cd32)
            .setThumbnail("https://pin.it/79FZYNy")
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
                    name: 'Api延遲',
                    value: `${client.ws.ping}ms`,
                    inline: true
                },
                {
                    name: '客服端Ping',
                    value: `${message.createdTimestamp - interaction.createdTimestamp}ms`,
                    inline: true
                }
            ])
            await interaction.editReply({
                embed: [newEmbed],
            });
    }
}