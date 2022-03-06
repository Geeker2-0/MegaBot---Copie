const Discord = require("discord.js");
const db = require("quick.db");
const {PREFIX, COULEUR} = require("../config.js");
const economie = new db.table("economie");
const item = new db.table("item");

module.exports.run = (client, message, args) => {
    let jbl = item.fetch(`jbl_${message.guild.id}_${message.author.id}`)
    if(jbl === null)jbl = 0;

    let pc = item.fetch(`pc_${message.guild.id}_${message.author.id}`)
    if(pc === null)pc = 0;

    let télé = item.fetch(`télé_${message.guild.id}_${message.author.id}`);
    if(télé === null)télé = 0;

    const inventory = new Discord.MessageEmbed()
    .setTitle("Inventaire")
    .setDescription(
        `**JBL** : ${jbl}\r`+
        `**PC Gamer** : ${pc}\r`+
        `**Télé écran plat** : ${télé}`
    )
    .setFooter(`${message.guild.name} | inventory`)
    .setTimestamp()
    .setColor(COULEUR)

    message.channel.send({embeds : [inventory]})

}

module.exports.help = {
    name: 'inventory',
};