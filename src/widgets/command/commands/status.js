const StatusDB = require("../../../core/database")();

module.exports = {
    name: "status",
    ownersOnly: false,
    modsOnly: true,
    guildOnly: false,
    requireArgs: false,
    deleteCommand: true,
    cooldown: 10,
    disabled: false,
    messageExecute: async (message, args) => {
        // 2 args are needed, exit early if less
        if (args.length < 2) {
            message.channel.send(`[**${message.author.username}**] Status: Minimum of 2 arguments are needed.`);

            return;
        }

        // To Upper the expected activity
        let activity = args[0].toUpperCase();

        // Check with every possible activities, return early if match none.
        if (activity === "PLAYING" || activity === "P") {
            activity = "PLAYING";
        } else if (activity === "LISTENING" || activity === "L") {
            activity = "LISTENING";
        } else if (activity === "WATCHING" || activity === "W") {
            activity = "WATCHING";
        } else {
            message.channel.send(`[**${message.author.username}**] Status: "${args[0]}" is not a valid activity.`);

            return;
        }

        // Remove first element (the activity) and join others with spaces
        args.shift();
        let statusMessage = args.join(" ");

        // Update text and activity in database
        StatusDB.update(
            { 
                activity: activity,
                text: statusMessage
            },
            { where: { name: "status" }})
            .then(() => {
                console.log("Status database updated.");
            });

        message.client.user.setActivity(statusMessage, { type: activity })
            .then(presence => console.log(`Activity set to "${presence.activities[0].name}", type "${presence.activities[0].type}"`))
            .catch(console.error);

        message.channel.send(`[**${message.author.username}**] Status: Updated to "${activity}", "${statusMessage}".`);
    }
};
