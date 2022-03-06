const Discord = require("discord.js");
const db = require("quick.db");
const {PREFIX} = require("../config.js");
const economie = new db.table("economie");

module.exports.run = (client, message, args) => {
   let argent = economie.fetch(`monney_${message.guild.id}_${message.author.id}`)
   if(argent === null) argent = 0;

   return message.channel.send(`Tu as ${argent}€!`)
    

}

module.exports.help = {
    name: 'money',
};
