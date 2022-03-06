const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    const mention = message.mentions.members.first();
    if(mention === null){
        message.reply(":x: | Tu doit mentionner une personne à baffer!")
    }
    else{
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author} à mis une baffe à ${mention}`)
        .setDescription("Tah la claque du daron")
        .setFooter(message.guild.name)
        .setTimestamp()
        .setColor(COULEUR)

        message.channel.send({embeds :[embed]})
    }
}

module.exports.help = {
    name: 'slap',
};