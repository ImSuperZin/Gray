const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("Loop no status do BOT ativo!");
    console.log(" ");

    for (i=0; i<10;){
        
        client.user.setPresence({ game: { name: `Estou em ${client.guilds.size} Grupos!`, url: "https://www.twitch.tv/Gray", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "gr!ajuda Para Suporte!", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `${client.users.size} Usuarios Me Usarem!`, type: 3} });
        await sleep(60000)
    }
   

}
