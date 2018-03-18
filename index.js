console.log("Molly> Lancement en cours...")

const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
console.log('Molly> Lancé avec succès.')
setInterval(multigame, 10000)
});

bot.on("guildMemberAdd", member  =>{
   let role = member.guild.roles.find('name', 'Membre');
   bot.channels.find('name', 'discussion').send(`Bienvenue <@${member.id}> sur le discord francophone du jeu Deep Rock Galactic !`)
   member.addRole(role);
});

bot.on("message", message => {
    
    const args = message.content.slice("dpg!").trim().split(" ");
    const command = args[0].substring(4);
    
if(args.length > 0) args.shift();

    if(command === "help"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Liste des commands")
    .setDescription("dpg!help : Affiche la liste des commandes\ndpg!main [scout/gunner/ingeneer/driller]")
    .setFooter("Molly", "https://media.discordapp.net/attachments/420172766587781120/420270751975866368/molly.png")
    .setColor('RANDOM');
    message.channel.send(help_embed);
    };
    
    if(command === "main"){
        let author = message.author;
        let args = message.content.split(" ");
        args.shift();
        
        if(args[0] === "scout"){
           message.member.addRole(message.guild.roles.find("name", "Scout / Éclaireur").id);
            message.channel.send("Tu as reçus le grade Scout");
        }
          if(args[0] === "gunner"){
               message.member.addRole(message.guild.roles.find("name", "Gunner / Soldat").id);
                message.channel.send("Tu as reçus le grade Gunner");
            }
               if(args[0] === "ingeneer"){
                    message.member.addRole(message.guild.roles.find("name", "Ingeneer / Ingénieur").id);
                     message.channel.send("Tu as reçus le grade Ingeneer");
             }
                  if(args[0] === "driller"){
                    message.member.addRole(message.guild.roles.find("name", "Driller / Foreur").id);
                     message.channel.send("Tu as reçus le grade Driller");
                }
            }
});
    
    
        

 function multigame() {

    bot.user.setPresence({game: {name: `Dev By KAZOU`}});

    bot.user.setPresence({game : {name : 'dpg!help'}});
    
}
bot.login("NDIyODAxMTg5Mjc3Nzk0MzA0.DYhD0g.NnEEpkGTq4z4dLq6kGFnTixwxDQ");
