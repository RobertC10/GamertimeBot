module.exports = {
    name: 'help',
    description:"Embeds!",
    execute(message, args, Discord){
        
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help!')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('This tells you what the bot can do.')
        .addFields(
            {name: 'gt!ping', value: 'The command above will make the bot respond with "pong!"'}, 
            {name: 'gt!youtube <person>', value: 'The command above will give you the youtube channel of the person requested.'},
            {name: 'gt!smite <@user>', value: 'The command above will have to bot smite whoever you tagged.'},
            {name: '😂THEY SAID IT😂', value: 'The message above will be sent if your message contains "bruh" or "lmao".'}, 
            {name: 'tysm!!😳😅', value: 'The message above will be sent if your message contains "good bot".'},
            {name: 'big sad', value: 'The message above will be sent if your message contains "sad" or "lost".'},
            {name: 'BIG 🧠', value: 'The message above will be sent if your message contains "smart".'},
            {name: 'The POGGERS emote', value: 'The message above will be sent if your message contains "poggers".'},
            {name: '🥺I\'m sorry😥', value: 'The message above will be sent if your message contains "bad bot".'}   


        )
        .setFooter('page 1/1');
    message.channel.send(helpEmbed);

    }


}
