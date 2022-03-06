const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(args[0] == undefined){
            message.reply(":x: | Nombre de message non ou mal défini!");
        }
        else{
            let number = parseInt(args[0]);
            if(isNaN(number)){
                message.reply(":x: | Nombre de message non ou mal défini!");
            }
            else{
                message.channel.bulkDelete(number).then(messages => {
                    message.channel.send(`${messages.size} messages supprimés!`);
                }).catch(err => {
                    console.log(`Erreur de clear ${err}`);
                });
            };
        };
    }else{
        message.channel.send(":x: | Tu n'as pas la permission de manager les messages!")
    }
}

module.exports.help = {
    name: 'clear',
};