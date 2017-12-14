//FuzzBot created by Nicolas Kychenthal!
console.log("index started");

const Discord = require('discord.js');   // const is a unchanchable variables
console.log("Discord.js started");

//const Enmap = require("enmap");    // PROBLEMS FOR SOME REASON!
//console.log("enmap started");

//const EnmapLevel = require('enmap-level');
//console.log("enmap-level started");

console.log("const's set");

var client = new Discord.Client();
const token = "Mzg0NTA2NTcxMTQ2Nzg4ODY3.DP32fQ.jLdWsBMos7JyKDsx8atkkUT-M9c"

console.log("discord client and token created");

//const tableSource = new EnmapLevel({name: "stats"});
//const stats = new Enmap({provider: tableSource});

//client.stats = new Enmap({name: "stats"});

//console.log("table created");

client.on("ready", () => {
    console.log("I am ready!");
})

const prefix = "f!";
client.on('message', (message) => {    // Anything in here happens when someone types something in the chat

    if (message.author.bot) return; // Ignores bots
    if (message.channel.type === "dm") return; // Ignores DM's
    
    if (message.content.startsWith("who's your daddy")) {
        message.channel.send ("Nicolas K. is my creator <3");
    }
    
    if (message.content.startsWith("images")) {
        message.channel.send ("Current images: oh worm, doole");
    }

    if (message.content.startsWith("oh worm")) {
        message.channel.send('oh worm??', {
            files: [
                "./OhWorm.png"
            ]
        });
    }
    
    if (message.content.startsWith("doole")) {
        message.channel.send('srunk and 20???? doole', {
            files: [
                "./doole.png"
            ]
        });
    }
    
    if (message.content.startsWith ("news")) {
        message.reply(",sorry, this is not a feature yet!);
    }
    
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
