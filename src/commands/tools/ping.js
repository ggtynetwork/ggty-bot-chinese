const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Return the bot\'s latency'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newEmbed = new EmbedBuilder()
            .setTitle('Pong! 🏓')
            .setDescription('Here\'s The API Latency And Client Ping Of The Bot:')
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
                    name: 'API Latency',
                    value: `${client.ws.ping}ms`,
                    inline: true
                },
                {
                    name: 'Client Latency',
                    value: `${message.createdTimestamp - interaction.createdTimestamp}ms`,
                    inline: true
                }
            ])
            await interaction.editReply({
                embed: [newEmbed],
            });
    }
}