//FuzzBot created by Nicolas Kychenthal!

// * YOU DO NOT NEED TO RESTART THE HEROKU TO APPLY CHANGES!!! * 
console.log("index started");

const Discord = require('discord.js');   // const is a unchanchable variables
console.log("Discord.js started");

const Enmap = require("enmap");    // PROBLEMS FOR SOME REASON!
console.log("enmap started");

const EnmapLevel = require('enmap-level');
console.log("enmap-level started");

console.log("const's set");

var client = new Discord.Client();
const token = "Mzg0NTA2NTcxMTQ2Nzg4ODY3.DP32fQ.jLdWsBMos7JyKDsx8atkkUT-M9c"

console.log("discord client and token created");

console.log("Table created");

client.on("ready", () => {
    console.log("I am ready!");
    news = "";
    client.user.setGame ("f!help");
})

const prefix = "f!";
client.on('message', (message) => {    // Anything in here happens when someone types something in the chat
    
    MyID = "198504755016892416";
    fuzzbotHQ = "374361004894846987"; heyhoe = "252232772758929408";
    
    if (message.author.bot) return; // Ignores bots
    
    // REDIRECTING DM'S
    if (message.channel.type === "dm") {
        var messageEmbed = new Discord.RichEmbed()
            messageEmbed.addField("Username", message.author.username, true);
            messageEmbed.addField("ID", message.author.id, true);
            messageEmbed.setThumbnail(message.author.avatarURL);
        NickUser.sendMessage (messageEmbed);
        NickUser.sendMessage ("Message :   " + message);
 
    }

    // MISC. COMMANDS
    if (message.author.id == "198504755016892416") { NickUser = message.author; }
    
    if (message.content == "test") {
        message.channel.send ("FuzzBot is up and running!");
    }
    
    if (message.content.startsWith("who's your creator" || "whos your creator")) {
        message.channel.send ("Nick, AntarcticRuler, is my creator :heart:");
    }
    
    if (message.content.startsWith (":eyes:")) {
        message.channel.send (":eyes:");
    }
    
    if (message.content.startsWith (prefix + "help")) {
        message.author.sendMessage ('**--- FuzzBot ---** \nFuzzBot was made by AntarcticRuler \n \n**--- Commands ---** \nf!images ; f!news ; f!d20, f!d10, f!d5 \n \n**--- Images & Video ---** \ntype what "f!images" says in chat to get a list of images and videos \n\n **--- Send Images or Videos ---** \nIf you wish to submit images or videos for your server send an invite to your server and a url picture of the image or a youtube link for videos to this bot via DM\nPlease specify if you wish to make the image public (any server can see), or make it private (can only be used in your server)\n \n - Thank you for using FuzzBot, Nick :heart:');
    }
    
    if (message.content.startsWith(prefix + "images")) {
        message.channel.send ("Current images: oh worm, doole (heyhoe), weaaboo slayer (heyhoe)");
    }
    
    // INVENTORY COMMANDS   
    if (message.content.startsWith (prefix + "registerInv")) {
        var inventory = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
        message.reply ("Inventories have not been implimented yet!"12);
    }
    
    if (message.content.startsWith (prefix + "items")) {
        message.reply ("Items : \nFutureItems : Bracer of the Antarctic);
    }
    
//     if (message.content.startsWith (prefix + "inventory")) {
//         message.reply ("You're Inventory is : " + inventory[0] + ", " + inventory[1] + ", " + inventory[2] + ", " + inventory[3] + ", " + inventory[4] + ", " + inventory[5] + ", " + inventory[6] + ", "+ inventory[7] + ", "+ inventory[8] + ", "+ inventory[9]);
//     }
    
    // IMAGES AND VIDEO'S
    if (message.content.startsWith("oh worm")) {
        message.channel.send('oh worm??', {
            files: [
                "./OhWorm.png"
            ]
        });
    }
    
    if (message.content.startsWith("doole") && message.guild.id == heyhoe) {
        message.channel.send('srunk and 20???? doole', {
            files: [
                "./doole.png"
            ]
        });
    }
    
    if (message.content.startsWith("weeaboo slayer") && message.guild.id == heyhoe) {
        message.channel.send("weeaboo slayer is not fursona... it's art", {
            files: [
                "./weeaboSlayer.png"
            ]
        });
    }
 
    // NEWS
    if (message.content.startsWith (prefix + "news")) {
        message.reply ("Here's the news : " + news)
    }
    if (message.content.startsWith("setnews") && message.author.username == "AntarcticRuler" && message.author.id == 198504755016892416) {
        news = message.content
        message.reply ("the news is : " + news);
    }
    
    // DICE
    if (message.content.startsWith(prefix + "d20")) {
         var d20number = Math.floor (Math.random() * (20 - 1)) + 1;
         message.reply("rolled a : " + d20number + "!");
    }
    if (message.content.startsWith(prefix + "d10")) {
        var d10number = Math.floor (Math.random() * (10 - 1)) + 1;
        message.reply("rolled a : " + d10number + "!");
    }
    if (message.content.startsWith(prefix + "d5")) {
        var d5number = Math.floor (Math.random() * (5 - 1)) + 1;
        message.reply("rolled a : " + d5number + "!");       
    } 
    
});

client.login(process.env.token); // the string is the bot's token
