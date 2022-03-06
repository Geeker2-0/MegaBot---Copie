const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    const shop = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setDescription(
        "**`1`** : JBL | 100€\r"+
        "**`2`** : PC Gamer | 5000€\r"+
        "**`3`** : Télévision écran plat | 3000€"
    )
    .setFooter(`${message.guild.name} | shop`)
    .setTimestamp()
    .setColor(COULEUR)

    message.channel.send({embeds: [shop]})
}

module.exports.help = {
    name: 'shop',
};