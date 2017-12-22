//FuzzBot created by Nicolas Kychenthal!

// * YOU DO NOT NEED TO RESTART THE HEROKU TO APPLY CHANGES!!! * 
console.log("index started");

const Discord = require('discord.js');   // const is a unchanchable variables
console.log("Discord.js started");

console.log("const's set");

var client = new Discord.Client();
//THE TOKEN GOES HERE (EXISTS ON HEROKU SO NO NEED FOR IT TO BE HERE)

const fs = require("fs");
client.inv = require("./inv.json");

console.log("discord client and token created");

client.on("ready", () => {
    console.log("I am ready!");
    news = "";
    client.user.setGame ("f!help & f!info");
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
    
    // NEWS
    if (message.content.startsWith (prefix + "news")) {
        message.reply ("Here's the news : " + news)
    }
    if (message.content.startsWith("setnews") && message.author.username == "AntarcticRuler" && message.author.id == 198504755016892416) {
        news = message.content
        message.reply ("the news is : " + news);
    }
    
    // MISC. COMMANDS
    if (message.author.id == "198504755016892416") { NickUser = message.author; }
    
    if (message.content == "test") {
        message.channel.send ("FuzzBot is up and running!");
    }
    
    if (message.content.startsWith("who's your creator") || message.content.startsWith("whos your creator") || message.content.startsWith (prefix + "info")) {
        message.channel.send ("Nick, AntarcticRuler, created me :heart: \nYou can find him at his YouTube channel : https://goo.gl/HuyMMd \nAlso you can come back with me to our HQ here : https://discord.gg/ppmaxad");
    }
    
    if (message.content.startsWith ('👀')) {
        message.channel.send (":eyes:");    // QUICK LESSON - MESSAGE.CONTENT.STARTSWITH USES () NOT "" FOR THE EQUALS STATEMENT
    }
    
    if (message.content.startsWith ("mmm")) {
        message.channel.send (":yum:");
    }
    
    if (message.content.startsWith (prefix + "help")) {
        message.author.sendMessage ('**--- FuzzBot ---** \nFuzzBot was made by AntarcticRuler \n \n**--- Commands ---** \nf!images ; f!news ; f!d20, f!d10, f!d5 \n \n**--- Images & Video ---** \ntype what "f!images" says in chat to get a list of images and videos \n\n **--- Send Images or Videos ---** \nIf you wish to submit images or videos for your server send an invite to your server and a url picture of the image or a youtube link for videos to this bot via DM\nPlease specify if you wish to make the image public (any server can see), or make it private (can only be used in your server)\n \n - Thank you for using FuzzBot, Nick :heart: - type f!info for more info :smile:');
    }
    
    if (message.content.startsWith(prefix + "images")) {
        message.channel.send ("Current images: oh worm, doole (heyhoe), weaaboo slayer (heyhoe)");
    }
    
    // INVENTORY COMMANDS   
    if (message.content.startsWith(prefix + "inv") || message.content.startsWith(prefix + "inventory")) {
        message.channel.send ("The inventory feature is only avaliable during certain times. These times will be announced ahead of time in FuzzBot HQ under inventory and trade.");
    }
    
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
