console.log("Molly> Lancement en cours...")

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.TOKEN;


bot.on('ready', () => {
console.log(`Molly> Lancé avec succès. Sur ${bot.guilds.size} serveur(s) avec ${bot.users.size} user(s)`)
setInterval(multigame, 10000)
bot.user.setUsername("Molly");
});

bot.on("guildMemberAdd", member  =>{
   let role = member.guild.roles.find('name', 'Membre');
   bot.channels.find('name', 'discussion').send(`Bienvenue <@${member.id}> sur le discord francophone du jeu Deep Rock Galactic !`)
   member.addRole(role);
});

bot.on("message", message => {
    
    const args = message.content.slice("!").trim().split(" ");
    const command = args[0].substring(1);
    
if(args.length > 0) args.shift();

   if(message.channel.id =! 419969015713234944){
      message.channel.send("Commande dans le #demande-de-role s'il te plaît !")
      return;
      }                   
    if(command === "help"){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Liste des commands")
    .setDescription("```!help : Affiche la liste des commandes\n!main [scout/gunner/ingeneer/driller]```")
    .setFooter("Molly", "https://media.discordapp.net/attachments/420172766587781120/420270751975866368/molly.png")
    .setColor('RANDOM');
    message.channel.send(help_embed);
    };
    
    if(command === "main"){
        let author = message.author;
        let args = message.content.split(" ");
        args.shift();
        
         if(!args[0]){
            message.channel.send("Syntax : !main [scout/gunner/ingeneer/driller]")
            return;
        }
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
   if (command === "eval"){
        var util = require("util");
        let args = message.content.split(" ").slice(1); 	
        let code = args.join(' ');
            if (message.author.id != '259711276853231617') return;
            if (!code) return;
                try {
          let ev = eval(code)
                        let str = util.inspect(ev, {
                            depth: 1
                        })
                         str = `${str.replace(new RegExp(`${bot.token}|${token}`, "g"), "token")}`;
                        if(str.length > 1800) {
                            str = str.substr(0, 1800)
                            str = str + "..."
                        }
        message.react("✅");
        var embed = new Discord.RichEmbed()
        .setColor("#0300ff")
        .addField("Evaluation :inbox_tray:", "\`\`\`" + code + "\`\`\`")
        .addField("Resultat :outbox_tray:", "\`\`\`" + str + "\`\`\`")
        .setFooter(`Evaluation par @${message.author.username}`)
                message.channel.send(embed);} catch (err) {	
         message.react("❌");
        var embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("Evaluation :inbox_tray:", "\`\`\`" + code + "\`\`\`")
        .addField("Resultat :outbox_tray:", "\`\`\`" + err + "\`\`\`")
        .setFooter(`Evaluation par @${message.author.username}`)
        message.channel.send(embed)
}}; 
});
    
    
        

 function multigame() {

    bot.user.setPresence({game: {name: `Dev By KAZOU`}});

    bot.user.setPresence({game : {name : '!help'}});
    
}
bot.login(process.env.TOKEN);
