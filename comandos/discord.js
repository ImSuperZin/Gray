module.exports.run = async(client, message, args) =>{
    message.delete();  
    message.reply(`Olhe seu privado , o grupo está lá xD!`);
    message.author.send({embed: {
          color: 12584993,
          author: {
            name: `${message.author.tag}`,
            icon_url: message.author.avatarURL
          },
          title: "Discord - Gray | Apartament™",
          url: " ",
          description: "",
          fields: [{
              name: "Meu Grupo!",
              value: "https://discord.gg/Gq9ZJds"
            },
            
             
            {
            
            
              name: "Sobre mim",
              value: "Bem, fui criado  programado pelo <@272419543601643520>, com o objetivo de ajuda e diverti todo mundo!"
            },
            {
              name: "Gray FullBuster",
              value: `Ajude a chegarmos a 100 Membros <3`
  
            }, 
          
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Gray™"
          }
        }
      });
  }
