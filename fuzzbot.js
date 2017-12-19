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
    
    if (message.content.content == '👀') {
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
        var inv = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]

        client.inv [message.author.username] = {
            discordID: message.author.id,
            slotOne: inv[0], slotTwo: inv[1], slotThree: inv[2], slotFour: inv[3], slotFive: inv[4], slotSix: inv[5], slotSeven: inv[6], slotEight: inv[7], slotNine: inv[8], slotTen: inv[9]
        }
        fs.writeFile("./inv.json", JSON.stringify(client.inv, null, 4), err => {
            if (err) throw err;
            message.channel.send ("inventory registerred");
        });
    }
    
    if (message.content.startsWith (prefix + "inventory")) {
        for (let i in client.inv) {
            let slotOne = client.inv[i].slotOne;
            let slotTwo = client.inv[i].slotTwo;
            let slotThree = client.inv[i].slotThree;
            let slotFour = client.inv[i].slotFour;
            let slotFive = client.inv[i].slotFive;
            let slotSix = client.inv[i].slotSix;
            let slotSeven = client.inv[i].slotSeven;
            let slotEight = client.inv[i].slotEight;
            let slotNine = client.inv[i].slotNine;
            let slotTen = client.inv[i].slotTen;

            message.reply ("You're inventory is : " + slotOne + ", " + slotTwo + ", " + slotThree + ", " + slotFour + ", " + slotFive + ", " + slotSix + ", " + slotTwo + ", " + slotSeven + ", " + slotEight + ", " + slotNine + ", " + slotTen);
        }
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
