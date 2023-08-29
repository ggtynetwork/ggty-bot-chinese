const { EmbedBuilder } = require('discord.js');
const Parser = require("rss-parser");
const parser = new Parser();
const fs = require("fs");
const { url } = require('inspector');

module.exports = (client) => {
    client.checkVideo = async () => {
        const data = parser
        .parseURL(
            "https://youtube.com/feeds/videos.xml?channel_id=UCNeaxAeJxr35vPYenmInzmg"
        )
        .catch(console.error);

        const rawData = fs.readdirSync(`${__dirname}/../../json/video.json`);
        console.log(rawData,data);

        if (jsonData.id !== data.items[0].id) {
            //new video or video not sent
            fs.writeFileSync(
                `${__dirname}/../../json/video.json`,
                Json.stringify({ id: data.items[0].id })
            );

            const guild = await client.guilds
            .fetch('1143167739834417283')
            .catch(console.error);
            const channel = await guild.channel
            .fetch('channel.id')
            .catch(console.error);

            const { title, link, id, author } = data.items[0];
            const embed = new EmbedBuilder({
                title: title,
                url: link,
                timestamp: Date.now(),
                image:{
                    url:`https://img.youtube.com/vi/${id.slice(9)/maxresdefault.jpg}`
                },
                author: {
                    name: author,
                    iconURL: 'https://bit.ly/3A6Q5RA',
                    url: 'https://youtube.com/@ggtynetwork/?sub_confirmation=1'
                },
                footer: {
                text: client.user.tag,
                iconURL: client.user.displayAvatarURL(),
                },
            });

            await channel.send({ embeds: [embed], content: `new video ex:hey ggty upload new video!` }).catch(console.error);
        }
    };
};
