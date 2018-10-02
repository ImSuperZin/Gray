const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ownerID = `272419543601643520`;
const prefix = `gr!` ;
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo Ã© ${prefix}`);

client.on('message', message => {
    if(message.content == 'gr!invite'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, invite para me convidar: \n [Clique Aqui](https://discordapp.com/oauth2/authorize?client_id=493790726799491082&scope=bot&permissions=2146958847).`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content == '<@493902440685502464>'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, meu prefix \`gr!\` \n Duvidas? , entre em meu grupo \`gr!discord\`.`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content.toLowerCase() === 'Gray Invite')
    message.channel.send('Meu Convite Pra Me Adicionar: https://discordapp.com/oauth2/authorize?client_id=493790726799491082&scope=bot&permissions=2146958847');

});
client.on('message', message => {
    if(message.content.toLowerCase() === 'Erza')
    message.channel.send('Minha namorada');

});


client.on('message', message => {

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
    message.delete();

});


