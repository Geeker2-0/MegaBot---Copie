const Discord = require("discord.js");
const db = require("quick.db");
const {PREFIX, COULEUR} = require("../config.js");
const economie = new db.table("economie");

module.exports.run = (client, message, args) => {
    let Owner = "766981501266558977";
    if(message.author.id =! Owner)return message.reply(":x: | Seulemtn le propriétaire du bot peut faire ça!");
    
    let user = message.mentions.members.first() || message.author;

    if(isNaN(args[0])) return message.reply(":x: | Indique un nombre d'euros à ajouter!");

    economie.subtract(`monney_${message.guild.id}_${user.id}` , args[0]);

    let argent = economie.fetch(`monney_${message.guild.id}_${user.id}`);

    const removemoney = new Discord.MessageEmbed()
    .setTitle("RemoveMoney")
    .setDescription(`${user.username} à maintenant ${argent}€`)
    .setFooter(`${message.guild.name} | removemoney`)
    .setTimestamp()
    .setColor(COULEUR)

    message.channel.send({embeds: [removemoney]});
}

module.exports.help = {
    name: 'removemoney',
};