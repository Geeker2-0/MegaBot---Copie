const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    const mention = message.mentions.users.first() || message.author;

    const avatar = new Discord.MessageEmbed()
    .setTitle("Avatar")
    .setDescription(`Avatar de <@${mention.id}>`)
    .setFooter(`${message.guild.name} | avatar`)
    .setTimestamp()
    .setAuthor(`${mention.tag} avatar`)
    .setImage(mention.displayAvatarURL({dymaic: true}))
    .setColor(COULEUR)

    message.channel.send({embeds: [avatar]})
}

module.exports.help = {
    name: 'avatar',
};