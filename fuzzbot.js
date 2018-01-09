//FuzzBot created by Nicolas Kychenthal!

// * YOU DO NOT NEED TO RESTART THE HEROKU TO APPLY CHANGES!!! * 
console.log("index started");

const Discord = require('discord.js');   // const is a unchanchable variables
console.log("Discord.js started");

console.log("const's set");

var client = new Discord.Client();
//THE TOKEN GOES HERE (EXISTS ON HEROKU SO NO NEED FOR IT TO BE HERE)

console.log("discord client and token created");

client.on("ready", () => {
    console.log("I am ready!")
    news = "";
    client.user.setGame ("f!help & f!info");
})

client.on ("guildMemberAdd", member => {
    if (member.guild.id == 374361004894846987) {
        var role = member.guild.roles.find ("name", "FuzzBot Peasent");
        member.addRole (role);
    }
});

const prefix = "f!";
client.on('message', (message) => {    // Anything in here happens when someone types something in the chat
    
    msg = message.content.toLowerCase ();
    
    MyID = "198504755016892416";
    fuzzbotHQ = "374361004894846987"; heyhoe = "252232772758929408";
    
    if (message.author.bot) return; // Ignores bots
    
    mention = message.mentions.users.first();
    
    // REDIRECTING DM'S
    if (message.author.id == "198504755016892416") { NickUser = message.author; }
    if (message.channel.type === "dm") {
        if (message.author.id == MyID) { return; }
        var messageEmbed = new Discord.RichEmbed()
            messageEmbed.addField("Username", message.author.username, true);
            messageEmbed.addField("ID", message.author.id, true);
            messageEmbed.setThumbnail(message.author.avatarURL);
        NickUser.sendMessage (messageEmbed);
        NickUser.sendMessage ("Message :   " + message + "\n-------------------");
 
    }
    
    // DM people with FuzzBot
    if (msg.startsWith (prefix + "send") && message.author.id == MyID) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (7);
        mention.sendMessage (mentionMessage);
        message.channel.send ("Message sent!");
    }
    
    // MISC. COMMANDS
    
    if (msg.startsWith ("test")) {
        message.channel.send ("FuzzBot is up and running!");
    }
    
    if (msg.startsWith("who's your creator") || msg.startsWith("whos your creator") || msg.startsWith (prefix + "info")) {
        message.channel.send ("Nick, AntarcticRuler, created me :heart: \nYou can find him at his YouTube channel : https://goo.gl/HuyMMd \nAlso you can come back with me to our HQ here : https://discord.gg/ppmaxad");
    }
    
    if (message.content.startsWith ('👀')) {
        message.channel.send (":eyes:");    // QUICK LESSON - MESSAGE.CONTENT.STARTSWITH USES () NOT "" FOR THE EQUALS STATEMENT
    }
    
    if (msg.startsWith("mmm")) {
        message.channel.send (":yum:");
    }
    
    if (msg.startsWith (prefix + "help")) {
        message.author.sendMessage ('**--- FuzzBot ---** \nFuzzBot was created by AntarcticRuler / Nick \n \n**--- Commands ---** \nf!images ; f!news ; f!d20, f!d10, f!d5 \n \n**--- Images & Video ---** \nType what "f!images" says in chat to get a list of images and videos \n\n **--- Send Images or Videos ---** \nIf you wish to submit images or videos for your server send an invite to your server and a url picture of the image or a youtube link for videos to this bot via DM\nPlease specify if you wish to make the image public (any server can see), or make it private (can only be used in your server) \n\n**--- Inventory Commands ---** \n*Inventory commands are only avaliable during certain times, these times will be announced in FuzzBot HQ under #inventory-times* \n \n- Thank you for using FuzzBot, Nick :heart: - type f!info for more info :smile:');
    }
    
    if (msg.startsWith(prefix + "images")) {
        message.channel.send ("Current images: oh worm, doole (heyhoe), weaaboo slayer (heyhoe)");
    }
    
    // INVENTORY COMMANDS   
    if (msg.startsWith(prefix + "inv")) {
        message.channel.send ("The inventory feature is in a beta state so it will not always work!");
    }
    
    // IMAGES AND VIDEO'S
    if (msg.startsWith("oh worm")) {
        message.channel.send('oh worm??', {
            files: [
                "./OhWorm.png"
            ]
        });
    }
    
    if (msg.startsWith("doole") && message.guild.id == heyhoe) {
        message.channel.send('srunk and 20???? doole', {
            files: [
                "./doole.png"
            ]
        });
    }
    
    if (msg.startsWith("weeaboo slayer") && message.guild.id == heyhoe) {
        message.channel.send("weeaboo slayer is not fursona... it's art", {
            files: [
                "./weeaboo_slayer.png"
            ]
        });
    }
    
    // DICE
    if (msg.startsWith(prefix + "d20")) {
         var d20number = Math.floor (Math.random() * (20 - 1)) + 1;
         message.reply("rolled a : " + d20number + "!");
    }
    if (msg.startsWith(prefix + "d10")) {
        var d10number = Math.floor (Math.random() * (10 - 1)) + 1;
        message.reply("rolled a : " + d10number + "!");
    }
    if (msg.startsWith(prefix + "d5")) {
        var d5number = Math.floor (Math.random() * (5 - 1)) + 1;
        message.reply("rolled a : " + d5number + "!");       
    } 
    
});

client.login(process.env.token); // the string is the bot's token
