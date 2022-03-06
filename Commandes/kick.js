const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    if(message.member.permissions.has("KICK_MEMBERS")){
        let mention = message.mentions.members.first();

        if(mention == undefined){
            message.reply(":x: | Membre non ou mal mentionné!")
        }
        else{
            if(mention.kickable){
                mention.kick();
                const embedkick = new Discord.MessageEmbed()
                .setTitle("Kick")
                .setDescription(`${mention.displayName} à été kick avec succès!`)
                .setFooter(`${message.guild.name} | kick`)
                .setColor(COULEUR)
                .setTimestamp()
                .setThumbnail()

                message.channel.send({embeds: [embedkick]});
            }
            else{
                message.reply(":x: | Impossible de kick ce membre!")
            };
        };
    }else{
        message.channel.send(":x: | Tu n'as pas la permision de kick!")
    }
}

module.exports.help = {
    name: 'kick',
};