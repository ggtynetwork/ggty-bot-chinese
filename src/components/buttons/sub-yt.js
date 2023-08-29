module.exports = {
    data: {
        name: '訂閲油管'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: 'https://www.youtube.com/@ggtyNetwork'
        });
    }
}