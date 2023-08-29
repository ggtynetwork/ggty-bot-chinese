require('dotenv').config();
const { token, client_Id } = process.env;
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith('.js'));
            
            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`✅ | Command: ${command.data.name} has been passed through the handler`);
            }
        }

        const clientId = "1144930703046356993";
        const guildId = "1143167739834417283";
        const rest = new REST({ version: '9' }).setToken(token);
        try {
            console.log('🔄 | Started refreshing applications (/) commands.');

            await rest.put(Routes.applicationCommands(clientId), {
                body: client.commandArray,
            })

            console.log('✅ | Successfully reloaded applications (/) commands.');
        } catch (error) {
            console.error(error);
        }
    };
};