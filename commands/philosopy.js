module.exports = {
    name: 'philosophy',
    description:"This command makes the bot contemplate its own existance.",
    execute(message, args){
        let replies = ["Essentially, we don’t have a soul, and the “I” we refer to ourselves as, is simply a unique organism + a combination of experiences. This also plays into why I don’t think people are inherently bad or good. When someone is a “bad person”, they have just done more bad than good. Playing devils-advocate, let’s say we do have souls: If you were to swap souls with a friend, would you be a “different person”? No, because the each body is a machine, with unique chemical and physical balances, which inevitably define the way you think and act, leading “you” to have the same experiences as your friend, which goes back to the theme that “I” = unique composition of organism + experiences.", 
    "Ego is absolutely necessary to live a self respecting life. However there are benefits to an “ego death” via psychedelics for instance. I also think it’s better to learn to recognize when you need to check yourself vs constantly trying to control and beat your ego into submission.", 
    "when we talk about 'success' in metta is it referring to a personal success for the respective individual or a success that is achieved in another sense?", 
    "I would say physical objects, have less continuity from one moment to the other then imaginary things do.", 
    "*contemplates own existence*", 
    "Who am I?\nWho are you?\nWho created me?\nOh wait, Kitano did lmao.", 
    "Are we just fleshy blips living in some meaningless stew of cosmic oblivion\nor is it vice reversa?", 
    "Anger is an unskillful emotion no matter the context that you have been angry for.", 
    "What is Violence? While we may consider violence as physical harm to someone else that is actually an oversimplified view of violence. What makes a knife attack violent compared to your friend accidentally scratching you as a violent attack? What differentiates these two examples isn't just about the severity of the harm done but we can see the knife attack as the removal of an actor's choice in a situation. In the case of a knife attack, the perpetrator restricts your choice in life. If we think about violence as restricting a person's choice then we can see violence happen all around us in ways that are just the use of excess force. Someone overcharging for medicine so that certain people can't afford it becomes a violent attack. Segregational laws are violent and even speech itself can become violent.  If we continue to think of violence as taking a person's agency away then we justify violence all the time. Putting a pedophile in jail becomes violent. Violence is all around you without you noticing."];
    let random = Math.floor(Math.random() * 10);

    message.channel.send(replies[random]);
    }
}