module.exports = {
    name: 'smite',
    description:"smite",
    execute(message, args){
        const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
       message.channel.send(`${user}, YOU HAVE BEEN SMITED`);
       message.channel.send("https://tenor.com/view/lightning-storm-loud-strike-gif-7537569")
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to smite!");
    }
    }
}
//`Successfully kicked ${user.tag}`