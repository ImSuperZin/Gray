module.exports.run = async(client, message, args) =>{
  message.delete();  
  message.reply(`Mandei meus comandos no seu privado.`);
  message.author.send({embed: {
        color: 12584993,
        author: {
          name: `${message.author.tag}`,
          icon_url: message.author.avatarURL
        },
        title: "Informações - Gray™",
        url: " ",
        description: ":warning: Me Ajude a pegar 100 Membros em meu grupo! :warning: ",
        fields: [{
            name: "Ajuda",
            value: "Quer saber alguns comandos meus? Veja abaixo! (lembrando que os comandos de moderação precisam do cargo `Staff`.)"
          },
          {
            name: "Moderação",
            value: 
`**gr!ban** = Irá banir o membro mencionado (Necessita da menção do usuário e motivo) 
**gr!unban** = Irá desbanir o membro já banido (Precisa da menção e motivo)
**gr!mute** = Irá mutar o membro mencionado (Precisa da menção e motivo)
**gr!unmute** = Irá desmutar o membro já mutado (o membro precisa estar mutado para poder desmutar)
**gr!limpar** = Limpará as mensagens (quantidade para colocar: 2 à 100 mensagens)
**gr!kick** = Irá kickar o membro mencionado (Necessita da menção do usuário e motivo) 
**gr!lockdown** = Irá fechar o chat. **(Poderá ter bugs!)**`
          
},
          {
            name: "Informação & Diversão",
            value: 
`**gr!ping** = Caso queira ver o ping do bot
**gr!say** = O bot irá dizer a seguinte frase
**gr!fotografia** = Irá mandar fotos aleatórias de: Artes, lugares e etc...
**gr!puppy** = Cachorrinhos!! (Manutenção)
**gr!botinfo** = Irá mandar informações do bot.
**gr!cat** = Gatinhos!!
**gr!votacao** = Fazer uma votação.
**gr!aviso** = Fazer um aviso.
**gr!conquista** = Fazer uma conquista.
**gr!piada** = O Bot irá fazer uma piada.
`
          
},
          {
            name: "Meu Criador:",
            value: "Bem, fui criado e programado por: <@272419543601643520>"
          },
          {
            name: "Meu Grupo:",
            value: `Digite "gr!discord"`

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
