module.exports = {
    name: 'helpt',
    description:"this is a ping command!",
    execute(message, args){
        message.channel.send(`
            (gt!helpt) - lists all the commands you can do with Bizbot.
(gt!ping) - makes the bot respond with "pong!"
(gt!youtube <person>) - gives you the youtube channel of the person requested.
(gt!smite <@user>) - have to bot smite whoever you tagged.
(gt!philosphy) - why this? why that? fuck you.
(gt!random <keyword>) - For the key word, you can put "name", "number", or "color".
(gt!image <word>) - The bot will search an image of whatever you put after "gt!image", so if you want to search something that\'s two words, use a dash(-) instead of a space. eg."Minecraft-Bee".
(😂THEY SAID IT😂) - The message will be sent if your message contains "bruh" or "lmao".
(tysm!!😳😅) - The message will be sent if your message contains "good bot".
(big sad) - The message will be sent if your message contains "sad" or "lost".
(BIG 🧠) - The message will be sent if your message contains "smart".
(The POGGERS emote) - The message will be sent if your message contains "poggers".
(Woah Woah don\'t say the fuck word!) - The message will be sent if marn says "fuck".
(🥺I\'m sorry😥) - The message will be sent if your message contains "bad bot".
(😴gn🛌) - The message will be sent if your message contains "night" or "sleep".
(👋cya) - The message will be sent if your message contains "bye".
(☀️Rise and Shine!☀️) - The message will be sent if your message contains "morning" or "wake up".
`);

    }
}