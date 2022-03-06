const Discord = require('discord.js');
const db = require("quick.db");
const client = new Discord.Client({intents: [
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_BANS,
  Discord.Intents.FLAGS.GUILD_MEMBERS,
  Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Discord.Intents.FLAGS.GUILD_VOICE_STATES
]});
const fs = require('fs');
const {TOKEN, PREFIX, COULEUR} = require("./config.js");
const varserv = new db.table("varServ");

client.login(TOKEN);

client.commands = new Discord.Collection();
fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error);

  let commandes = f.filter(f => f.split(".").pop() === "js");
  if(commandes.length <= 0) return console.log("aucune commande trouvé dans le dossier");

  commandes.forEach((f) => {
    let commande = require(`./Commandes/${f}`);
    console.log(`${f} commande chargée !`);
    client.commands.set(commande.help.name, commande);

  });
});

fs.readdir("./Events/", (error, f) => {
  if(error) console.log(error);
  console.log(`${f.length} events en chargement`);

  f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  });

});

client.on("interactionCreate", interaction => {
  if(interaction.isButton()){
    interaction.deferUpdate()
      //NUKE
      if(interaction.customId === "nuke"){
        if(interaction.member.permissions.has("MANAGE_MESSAGES")){
          interaction.channel.clone().then((ch) => {
          ch.setParent(interaction.channel.parent);
          ch.setPosition(interaction.channel.position);
          interaction.channel.delete();
  
          ch.send(":white_check_mark: | Ce salon à bien été nuke!");
          });
        }else{
          interaction.channel.send(":x: | Tu n'as pas la permission de manger les messages!")
        }
      };
  };
});
client.on("guildMemberAdd" , (newmember) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Un nouveau membre!")
  .setDescription(`<@${newmember.id}> viens d'arrivé sur le serveur!`)
  .setFooter(newmember.guild.name)
  .setColor(COULEUR)
  .setTimestamp()
  
  client.channels.cache.get(varserv.get(`welcome_${newmember.guild.id}`)).send({embeds : [embed]})
});
client.on("guildMemberRemove" , (newmember) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Un membre nous quitte!")
  .setDescription(`<@${newmember.id}> viens de partir du serveur!`)
  .setFooter(newmember.guild.name)
  .setColor(COULEUR)
  .setTimestamp()
  
  client.channels.cache.get(varserv.get(`goodbye_${newmember.guild.id}`)).send({embeds : [embed]})
});

/*client.on("messageCreate" , message => {
  message.author.crt
})
*/