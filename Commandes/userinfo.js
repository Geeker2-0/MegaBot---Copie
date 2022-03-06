const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    const mention = message.mentions.members.first().user;
    if(mention === null){
        message.reply(":x: | Membre non ou mal mentionné!")
    }else{
        const embed = new Discord.MessageEmbed()
        .setTitle("Informations sur l'utilisateur")
        .setDescription(`Compte créer : ${mention.createdAt}
        Nom d'utilisateur : ${mention.username}
        Nom d'utilisateur et tag : ${mention.tag}`)
        .setFooter(message.guild.name)
        .setTimestamp()
        .setColor(COULEUR);
    
        message.channel.send({embeds : [embed]});
    }
}

module.exports.help = {
    name: 'userinfo',
};