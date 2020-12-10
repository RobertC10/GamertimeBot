const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const prefix = (config.prefix);

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', async message =>{
    
    if(message.author.bot) return;
    message.content = message.content.toLowerCase();
     if(message.content.includes('bruh')||message.content.includes('Bruh')||message.content.includes('lmao')||message.content.includes('LMAO')){
        message.channel.send('😂HE SAID IT😂');
    }else if(message.content.includes('good bot')){
        message.channel.send('tysm!!😳😅');
    }else if(message.content.includes('sad') || message.content.includes('lost')){
        message.channel.send('big sad');
    }else if(message.content.includes('smart')){
        message.channel.send('BIG 🧠');
    }else if(message.content.includes('poggers')){
        message.channel.send('https://cdn.discordapp.com/attachments/785993409168277525/786359909238702090/poggers.png');
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command == 'counter'){
        args[0] = args[0].toLowerCase();
        args[1] = args[1].toLowerCase();
        client.commands.get('counter').execute(message, args);
    }else if(command == 'youtube'){
        args[0] = args[0].toLowerCase();
        client.commands.get('youtube').execute(message, args);
    }else if(command == 'smite'){
        client.commands.get('smite').execute(message, args);
    }
});


client.login(config.token)
