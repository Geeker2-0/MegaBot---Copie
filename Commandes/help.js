const Discord = require("discord.js");
const {PREFIX, COULEUR} = require("../config.js");

module.exports.run = (client, message, args) => {
    const help = new Discord.MessageEmbed()
    .setTitle("Help")
    .setDescription(
    `Lien du bot : [Invitation MegaBot](https://discord.com/oauth2/authorize?client_id=832949321720266793&scope=bot&permissions=395137084438$)`
    )
    .addField("Utile",
    `**help** : affiche la liste des commandes ainsi que leur utilisation | ${PREFIX}help\r`+
    `**avatar** : donne l'avatar de la personne mentionné | ${PREFIX}avatar @USER\r`+
    `**servinfo** : donne quelques informations sur le serveur | ${PREFIX}servinfo\r`+
    `**userinfo** : donne quelques informations sur l'utilisateur mentionné | ${PREFIX}userinfo @USER`
    )
    .addField("Fun",
    `**8ball** : commande fun pour une question | ${PREFIX}8ball\r`
    )
    .addField("Economie",
    `**money** : pour savoir commbien d'euros tu as | ${PREFIX}money\r`+
    `**shop** : voir les items en vente | ${PREFIX}shop\r`+
    `**buy** : acheter un item dans le shop | ${PREFIX}buy ID\r`+
    `**work** : travaille pour gagner de l'argent | ${PREFIX}work\r`+
    `**inventory** : affiche ton inventaire | ${PREFIX}inventory\r`   
    )
    .addField("Administration",
    `**ban** : ban la personne mentionné | ${PREFIX}ban @USER\r`+
    `**kick** : kick la personne mentionné | ${PREFIX}kick @USER \r`+
    `**clear** : supprime le nombre de messages indiqué | ${PREFIX}clear NOMBRE\r`+
    `**nuke** : suppprime tout les messages dans lequel la commande est utilisé | ${PREFIX}nuke\r`+
    `**giveaway** : commande pour lancer un giveaway | ${PREFIX}giveaway TEMPS(en millisecondes) PRIX\r`+
    `**welcomechannel** : défini le salon de bienvenue | ${PREFIX}welcomechannel\r`+
    `**goodbyechannel** : défini le salon d'au-revoir | ${PREFIX}goodbyechannel`
    )
    .setFooter(`${message.guild.name}`)
    .setTimestamp()
    .setColor(COULEUR)

    message.channel.send({embeds: [help]})
}

module.exports.help = {
    name: 'help',
};