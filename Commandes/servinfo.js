const Discord = require("discord.js");
const db = require("quick.db");
const {COULEUR} = require("../config.js");
const varserv = new db.table("varServ");

module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Informations sur le serveur")
    .setDescription(`Salon de bienvenue : <#${varserv.fetch(`welcome_${message.guild.id}`)}>
    Salon d'au-revoir : <#${varserv.fetch(`goodbye_${message.guild.id}`)}>
    Salon AFK : <#${message.guild.afkChannelId}>
    Nombre de salons : ${message.guild.channels.channelCountWithoutThreads}
    Nombre de membre ${message.guild.memberCount}`)
    .setFooter(message.guild.name)
    .setTimestamp()
    .setColor(COULEUR)

    message.channel.send({embeds : [embed]})
}

module.exports.help = {
    name: 'servinfo',
};