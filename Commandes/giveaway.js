const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");
const ms = require('ms');

module.exports.run = async (client, message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")){
        let timev = message.content.slice(PREFIX.length+9);
        if(!timev) return message.reply(":x: | Indique la duré du giveaway en millisecondes!");
        let time = parseInt(timev,10);
        if(time<= 15000){
            return message.reply(":x: | La duré en milliseconde doit être plus grande à 15 seconde!(15000 millisecondes)");
        }
        let prize  = message.content.split(`${time}`).join(" ").split(`${PREFIX}giveaway `).join("");
        if(!prize) return message.reply(":x: | Indique le prix !")

        const giveaway = new Discord.MessageEmbed()
        .setTitle("Giveaway")
        .setDescription(`Durée : ${ms(time)} Prix : ${prize}`)
        .setFooter(`${message.guild.name} | giveaway`)
        .setColor(COULEUR)
        .setTimestamp()

        let msg = await message.channel.send({embeds: [giveaway]})
        await msg.react('🎉')
        function winner(msg){
            let winner = message.reactions.cache.get('🎉').users.cache.random().id;
            return winner
        }
        
        setTimeout(() => {
            winner(msg)
            message.channel.send(`Le gagnent est <@${winner(msg)}>!Bravo à lui!`)

        }, time);



    }else{
        message.reply(":x: | Il faut être administrateur pour lancer un giveaway!");
    }


    
}

module.exports.help = {
    name: 'giveaway',
};