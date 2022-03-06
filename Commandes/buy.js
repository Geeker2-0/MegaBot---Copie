const Discord = require("discord.js");
const db = require("quick.db");
const {PREFIX, COULEUR} = require("../config.js");
const economie = new db.table("economie");
const item = new db.table("item");

module.exports.run = (client, message, args) => {
    let user = message.author;

    let argent = economie.fetch(`money_${message.guild.id}_${user.id}`)
    if(args[0] = 1){
        let jbl = item.fetch(`jbl_${message.guild.id}_${message.author.id}`);
        if(jbl === null)jbl = 0;

        
        if(argent < 100){
            return message.channel.send(":x: | Tu n'as pas assez d'argent!")
        }else{
            if(jbl = 0){
                economie.subtract(`money_${message.guild.id}_${message.author.id}`, 100);
                item.set(`jbl_${message.guild.id}_${message.author.id}`, 1);

                const buyjbl = new Discord.MessageEmbed()
                .setTitle("Buy")
                .setDescription("Tu as acheté une JBL pour 100€")
                .setFooter(`${message.guild.name} | buy`)
                .setTimestamp()
                .setColor(COULEUR)

                message.channel.send({embeds: [buyjbl]});
            }else{
                return message.channel.send(":x: | Tu as déjà une jbl!");
            }
        }
    }

    if(args[0] = 2){
        let pc = item.fetch(`pc_${message.guild.id}_${message.author.id}`);
        if(pc === null)pc = 0;

        
        if(argent < 5000){
            return message.channel.send(":x: | Tu n'as pas assez d'argent!")
        }else{
            if(pc = 0){
                economie.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
                item.set(`pc_${message.guild.id}_${message.author.id}`, 1);

                const buypc = new Discord.MessageEmbed()
                .setTitle("Buy")
                .setDescription("Tu as acheté un PC Gamer pour 5000€")
                .setFooter(`${message.guild.name} | buy`)
                .setTimestamp()
                .setColor(COULEUR)

                message.channel.send({embeds: [buypc]});
            }else{
                return message.channel.send(":x: | Tu as déjà un PC Gamer!");
            }
        }
    }

    if(args[0] = 3){
        let télé = item.fetch(`télé_${message.guild.id}_${message.author.id}`);
        if(télé === null)télé = 0;

        
        if(argent < 3000){
            return message.channel.send(":x: | Tu n'as pas assez d'argent!")
        }else{
            if(télé = 0){
                economie.subtract(`money_${message.guild.id}_${message.author.id}`, 3000);
                item.add(`télé_${message.guild.id}_${message.author.id}`, 1);

                const buytélé = new Discord.MessageEmbed()
                .setTitle("Buy")
                .setDescription("Tu as acheté une télé écran plat pour 3000€")
                .setFooter(`${message.guild.name} | buy`)
                .setTimestamp()
                .setColor(COULEUR)

                message.channel.send({embeds: [buytélé]});
            }else{
                return message.channel.send(":x: | Tu as déjà une télé écran!");
            }
        }
    }
}

module.exports.help = {
    name: 'buy',
};