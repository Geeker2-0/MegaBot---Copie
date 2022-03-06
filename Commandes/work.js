const Discord = require("discord.js");
const db = require("quick.db");
const {PREFIX, COULEUR} = require("../config.js");
const economie = new db.table("economie");

module.exports.run = (client, message, args) => {
    economie.add(`monney_${message.guild.id}_${message.author.id}`, 1600)
    message.channel.send("Tu as gagné 1600€ en travaillent!");
}

module.exports.help = {
    name: 'work',
};