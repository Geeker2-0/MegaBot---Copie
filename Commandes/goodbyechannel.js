const Discord = require("discord.js");
const db = require("quick.db");
const {PREFIX, COULEUR} = require("../config.js");
const varserv = new db.table("varServ");

module.exports.run = (client, message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")){
        const channel = message.channel.id;
        if(channel === null){
            message.reply(":x: | Il faut mentionné le salon des message d'arrivé!")
        }
        else{
            varserv.set(`welcome_${message.guild.id}` , channel)

            const embed = new Discord.MessageEmbed()
            .setTitle("Salon d'au-revoir")
            .setDescription(`Le salon d'au-revoir à été défini sur <#${channel}>`)
            .setFooter(message.guild.name)
            .setTimestamp()
            .setColor(COULEUR)

            message.channel.send({embeds :[embed]})
        }
    }else{
        message.reply(":x: | Il faut être Administrateur pour éxécuter cette commande!")
    }
}

module.exports.help = {
    name: 'goodbyechannel',
};