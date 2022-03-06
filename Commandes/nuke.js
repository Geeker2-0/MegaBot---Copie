const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        const row = new Discord.MessageActionRow()
            .addComponents(
            new Discord.MessageButton()
                .setCustomId("nuke")
                .setLabel("Nuke")
                .setStyle("DANGER")
                .setEmoji("🚨")
            );
        message.channel.send({content: "Appuie si tu est sûr de vouloir nuke", components: [row]})
    }else{
        message.reply(":x: | Tu n'as pas la permission de manager les messages!")
    }

        

}

module.exports.help = {
    name: 'nuke',
};