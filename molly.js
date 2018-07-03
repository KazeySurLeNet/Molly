console.log("Molly> Lancement en cours...")

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.TOKEN;


bot.on('ready', () => {
console.log(`Molly> Lancé avec succès. Sur ${bot.guilds.size} serveur(s) avec ${bot.users.size} user(s)`)
});

bot.on("guildMemberAdd", member  =>{
   let membre = member.guild.roles.find('name', 'Membre');
   let PC = member.guild.roles.find('name', 'PC');
   bot.channels.find('id', '462017313516945448').send(`Bienvenue <@${member.id}> sur le discord francophone du jeu Deep Rock Galactic ! Pense à lire le #informations📋 et le #annonces🔔`);
   member.addRole(membre);
   member.addRole(PC);
});

bot.on("message", message => {

    if(message.content.startsWith("!")){
    if(message.content.match(/(!main)|(!help)|(!game)|(!xbox)|(!pc)|(!notif)/g)){
    if(message.channel.id != "461985918409113600") return message.delete(100) 
    }
}
    
          
    if(message.content.startsWith("!help")){
    var help_embed = new Discord.RichEmbed()
    .setTitle("Liste des commands")
    .setDescription("```!help : Affiche la liste des commandes\n!main [scout/gunner/ingeneer/driller]\n!notif : Active/Desactive les notifications.\n!xbox : T'ajoute le grade xbox\n!pc : t'ajoute le grade pc```")
    .setFooter("Molly", "https://media.discordapp.net/attachments/420172766587781120/420270751975866368/molly.png")
    .setColor('RANDOM');
    message.channel.send(help_embed);
    };
   
    if(message.content.startsWith("!game")){
        let args = message.content.split(" ");
        args.shift();
        let game = args.join(" ");
        if(!game){
            message.channel.send(":x: **Définie un Jeu !** :x:")
            return;
        }
        bot.user.setPresence({ game: { name: game, type: 0 } });
        message.channel.send('Nom du Jeu modifié');
   }
   if(message.content.startsWith("!main")){
        let author = message.author;
        let args = message.content.split(" ");
        args.shift();
        
       if(!message.content.match(/(scout)|(gunner)|(engineer)|(driller)/g)){ 
          message.channel.send("Syntaxe : !main [scout/gunner/engineer/driller]");
          return;
       }

         if(!args[0]){
            message.channel.send("Syntaxe : !main [scout/gunner/engineer/driller]")
            return;
        }
        if(args[0] === "scout"){
           message.member.addRole(message.guild.roles.find("name", "Scout").id);
            message.channel.send("Tu as reçus le grade Scout");
        }
          if(args[0] === "gunner"){
               message.member.addRole(message.guild.roles.find("name", "Gunner").id);
                message.channel.send("Tu as reçus le grade Gunner");
            }
               if(args[0] === "engineer"){
                    message.member.addRole(message.guild.roles.find("name", "Engineer").id);
                     message.channel.send("Tu as reçus le grade Engineer");
             }
                  if(args[0] === "driller"){
                    message.member.addRole(message.guild.roles.find("name", "Driller").id);
                     message.channel.send("Tu as reçus le grade Driller");
                }
            }
            
            if(message.content.startsWith("!xbox")){
                message.member.addRole(message.guild.roles.find("name", "Xbox").id);
                message.member.removeRole(message.guild.roles.find("name", "PC").id)
                 message.channel.send("Tu as reçus le grade Xbox");
            }

            if(message.content.startsWith("!pc")){
                message.member.addRole(message.guild.roles.find("name", "PC").id);
                message.member.removeRole(message.guild.roles.find("name", "Xbox").id)
                 message.channel.send("Tu as reçus le grade PC");
            }
        

   
            if(message.content.startsWith("!notif")){
                    var author = message.guild.member(message.author);
                    if(author.roles.has(message.guild.roles.find("name", "Notif").id)){
                     author.removeRole(message.guild.roles.find("name", "Notif").id)
                     message.reply("Tu as désactivé les notifications.")
                } else {
                    author.addRole(message.guild.roles.find("name", "Notif").id)
                     message.reply("Tu as activé les notifications.")
                }
            }
   
        if(message.content.startsWith("!eval")){
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
        .addField("Evaluation :inbox_tray:", "\`\`\`JS" + code + "\`\`\`")
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
    
    
        

bot.login(process.env.TOKEN);
