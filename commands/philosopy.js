module.exports = {
    name: 'youtube',
    description:"This command sends youtube link!",
    execute(message, args){
        const number = Math.random();
        message.channel.send(number.toString());
    }
}