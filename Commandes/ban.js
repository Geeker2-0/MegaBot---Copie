const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    if(message.member.permissions.has("BAN_MEMBERS")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply(":x: | Membre non ou mal mentionné!")
        }
        else{
            if(mention.bannable){
                mention.ban();
                const embedban = new Discord.MessageEmbed()
                .setTitle("Ban")
                .setDescription(`${mention.displayName} à été banni avec succès!`)
                .setFooter(`${message.guild.name} | ban`)
                .setColor(COULEUR)
                .setTimestamp()

                message.channel.send({embeds: [embedban]});
            }
            else{
                message.reply(":x: | Impossible de bannir ce membre!")
            };
        };
    }else{
        message.channel.send(":x: | Tu n'as pas la permission de ban!")
    }
}

module.exports.help = {
    name: 'ban',
};