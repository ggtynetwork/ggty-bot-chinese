const { ActivityType, Status } = require('discord.js');

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
        {
            type: ActivityType.Watching,
            text: "兩個服主製作我:)",
            status: "online",
         },
         {
            type: ActivityType.Watching,
            text: "感謝加入ggty伺服器！",
            status: "online",
         },
         {
            type: ActivityType.Playing,
            text: "麥塊伺服器還在製作中！",
            status: "online",
         },
        ];
        const option = Math.floor(Math.random() * options.length);

        client.user.setPresence({
            activities:[
                {
                    name: options[option].text,
                    type: options[option].type,
                },
            ],
            status: options[option].status,
          }); 
        };
};