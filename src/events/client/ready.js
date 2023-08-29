module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
      setInterval(client.pickPresence, 10 * 1000);
      console.log(`✅ | The Bot "${client.user.tag}" Is Logged In And Has Been Online!`)

     setTimeout(client.checkvideo, 5 * 1000);
    },
};