const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('訂閲油管')
        .setDescription('訂閲我們的油管頻道！'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('點我!')
            .setStle(ButtonStyle.Primary)

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
}