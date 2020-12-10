module.exports = {
    name: 'helpt',
    description:"this is a ping command!",
    execute(message, args){
        message.channel.send(`
            (gt!helpt) - lists all the commands you can do with Bizbot.
(gt!ping) - makes the bot respond with "pong!"
(gt!youtube <person>) - gives you the youtube channel of the person requested.
(gt!smite <@user>) - have to bot smite whoever you tagged.
(😂THEY SAID IT😂) - The message above will be sent if your message contains "bruh" or "lmao".
(tysm!!😳😅) - The message above will be sent if your message contains "good bot".
(big sad) - The message above will be sent if your message contains "sad" or "lost".
(BIG 🧠) - The message above will be sent if your message contains "smart".
(The POGGERS emote) - The message above will be sent if your message contains "poggers".
(🥺I\'m sorry😥) - The message above will be sent if your message contains "bad bot".
        `);

    }
}