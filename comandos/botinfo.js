const Discord = require("discord.js");

exports.run = (client, message, args) => {
    
    const pc = client.emojis.find('name', 'Pc')

    const botinfo = new Discord.RichEmbed()
    .setTitle(':wave: Gray - Info')
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURl)
    .setFooter('Quer me adicione em seu grupo ---> gr!invite')
    .setDescription(`Olá, sou o Gray, sou um :boy::skin-tone-1: menino, sou um simples bot de moderação do discord.
    \n:incoming_envelope: Me invite para seu servidor, utilize **gr!invite**.`)

    .addField(`:desktop: Guilds`, `**${client.guilds.size}**`, true)
    .addField(":pencil: Canais", `**${client.channels.size}**`, true)
    .addField(":busts_in_silhouette: Usuários", `**${client.users.size}**`, true)
    .addField(":coffee: Criador", `<@272419543601643520>`, true)
    .addField(":robot: Fui Criado Em", `**23/09/2018** às **21:00**`, true)
    .addField(":question: Grupo de Suporte", `[Clique Aqui](https://discord.gg/eFmYts5)`, true)
    message.channel.send(botinfo)
}
