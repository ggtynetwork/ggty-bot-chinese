const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('subtoyt')
        .setDescription('Sub to our YouTube channel!'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('Click Me!')
            .setStle(ButtonStyle.Primary)

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    },
}