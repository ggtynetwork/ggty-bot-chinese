module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
      setInterval(client.pickPresence, 10 * 1000);
      console.log(`✅ | 這機器人 "${client.user.tag}" 已成功登入要discord上綫！`)

     setTimeout(client.checkvideo, 5 * 1000);
    },
};