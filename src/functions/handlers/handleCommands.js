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
                console.log(`✅ | 指令: ${command.data.name} 已成功能被使用！`);
            }
        }

        const rest = new REST({ version: '9' }).setToken(token);
        try {
            console.log('🔄 | 開始刷新 (/) 指令.');

            await rest.put(Routes.applicationCommands(client_Id), { // clientId 已被刪除，原因是”它“已經在".env"裏面並把"它們“都拉過來這裏了
                body: client.commandArray,
            })

            console.log('✅ | 成功加載應用程序(/)指令.');
        } catch (error) {
            console.error(error);
        }
    };
};