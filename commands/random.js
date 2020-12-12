module.exports = {
    name: 'random',
    description:"This command sends you something random.",
    execute(message, args){
        if(args[0] == 'color' || args[0] == 'colors'){
            let rcolor = ["Bistre", "Black", "Black bean", "Black olive", "Jet", "Ebony", "Cafe noir", 
            "Air Force blue", "Azure", "Baby blue", "Blue", "Byzantine blue", "Capri", "Celeste", "Cobalt blue", 
            "Cornflower blue", "Cyan", "Dark blue", "Iris", "Teal", "True Blue", "Auburn", "Bronze", "Brown", "Camel", 
            "Caramel", "Chestnut", "Chocolate", " Coffee", "Maroon", "Rust", "Sand", "Tan", "Aqua", "Apple green", 
            "Bright green", "Avocado", "Chartreuse", "Dark green", "Emerald", "Forest green", "Green", "Harlequin",
            "Ash grey", "Charcoal", "Grey", "Silver", "Rose quartz", "Timberwolf", "Atomic tangerine",
            "Amaranth", "Blush", "Crimson", "Dark Magenta", "Fandago", "Fuchsia", "Rose", "Amber", "Apricot",
            "Flame", "Gold", "Golden poppy", "Mango", "Orange", "Vermilion", "African violet", "Amethyst", "Byzantium", 
            "Dark violet", "Electric purple", "violet", "Fandango", "French violet", "Grape", "Mulberry", 
            "Crimson", "Fire engine red", "Flame", "Folly", "Lava", "Red", "Mystic red", "Folly", "White", 
            "Alice blue", "Beige", "Cream", "Eggshell", "Honeydew", "Ivory", "Peach", "Platinum", "Seasalt"];

            let random1 = Math.floor(Math.random() * rcolor.length);
            
            message.channel.send(rcolor[random1]);
        }else if(args[0] == 'number' || args[0] == 'num' || args[0] == 'numbers'){
            let x = 1000;
            let random2 = Math.floor(Math.random() * x);
            message.channel.send(random2);
        }else if(args[0] == 'name' || args[0] == 'names'){
            let rname = ["Sora", "Henry", "Ryan", "Miles", "Hyejin", "Marn", "Tim", "Nick"];
            let random3 = Math.floor(Math.random() * 9);
            message.channel.send(rname[random3]);
        }else{
            message.channel.send('w h a t.\nrandom what dummy head. You can\'t just tell me random... cmon');
        }

    }
}