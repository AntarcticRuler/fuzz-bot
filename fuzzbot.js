//FuzzBot created by Nicolas Kychenthal!

// * YOU DO NOT NEED TO RESTART THE HEROKU TO APPLY CHANGES!!! * 
console.log("index started");

const Discord = require('discord.js');   // const is a unchanchable variables
console.log("Discord.js started");

console.log("const's set");

var client = new Discord.Client();
const token = "Mzg0NTA2NTcxMTQ2Nzg4ODY3.DP32fQ.jLdWsBMos7JyKDsx8atkkUT-M9c"

console.log("discord client and token created");

client.on("ready", () => {
    console.log("I am ready!");
})

const prefix = "f!";
client.on('message', (message) => {    // Anything in here happens when someone types something in the chat

    if (message.author.bot) return; // Ignores bots
    if (message.channel.type === "dm") return; // Ignores DM's
    
    if (message.content.startsWith("who's your daddy")) {
        message.channel.send ("Nicolas K. is my creator :heart:");
    }
    
    if (message.content.startsWith("images")) {
        message.channel.send ("Current images: oh worm, doole, weabo slayer");
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
});

client.login(process.env.token); // the string is the bot's token
