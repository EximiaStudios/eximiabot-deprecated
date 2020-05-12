module.exports = {
    name: "ping",
    aliases: ["p", "pong"],
    ownersOnly: false,
    modsOnly: true,
    guildOnly: false,
    requireArgs: false,
    deleteCommand: false,
    cooldown: 10,
    disabled: false,
    messageExecute: async (message) =>
        message.channel.send(`🏓 ${Math.round(message.client.ws.ping)} ms`)
};
