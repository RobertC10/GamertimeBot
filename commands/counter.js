module.exports = {
    name: 'counter',
    description:"This command helps you counterpick in different games",
    execute(message, args){
        if(args[0]=='overwatch'||args[0]=='ow'){
            if(args[1]='bastion'){
                message.channel.send('Genji: is among the best Bastion Counters in the game hands down. You have the mobility to flank bastion from behind,  as well as the power to face him head on with your E.\ndeflect can use Bastion’s immense DPS to quickly destroy his own team in some cases.');
            }
        }

    }
}