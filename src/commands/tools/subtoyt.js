const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('查看油管')
        .setDescription('看看和順便訂閲我們！'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('點我!')
            .setStle(ButtonStyle.Primary)

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
}