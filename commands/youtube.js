module.exports = {
    name: 'youtube',
    description:"This command sends youtube link!",
    execute(message, args){
       if(args[0] == 'sora' || args[0] == 'kitano'){
           message.channel.send('https://www.youtube.com/channel/UCIZbjeIoft9jjNx9XS1Q9JQ');
       }else if(args[0] == 'henry' || args[0] == 'bizzaaal'){
            message.channel.send('https://www.youtube.com/channel/UCxXn8qxVavR38rls-p_k3Ow');
       }else if(args[0] == 'ryan' || args[0] == '0resistance'){
        message.channel.send('https://www.youtube.com/channel/UCqAEBuE6T1D3mQCzBCcI9ZA');
       }
        

    }
}