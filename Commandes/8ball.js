const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    let question = message.content.slice(PREFIX.length+6);

    if(!question){
        message.reply(":x: | Indique ta question!");
    }
    else{
        let responses = [
            "Oui",
            "Non",
            "Peut-être.",
            "Certainement!",
            "C'est sûr!",
            "Bien sûr!"
        ]

        let response = responses[Math.floor(Math.random()*(responses.length)-1)];

        const ball = new Discord.MessageEmbed()
        .setTitle("8ball")
        .setDescription(`${response}`)
        .setFooter(`${message.guild.name} | 8ball`)
        .setColor(COULEUR)
        .setTimestamp()

        message.channel.send({embeds: [ball]});

    }
}

module.exports.help = {
    name: '8ball',
};