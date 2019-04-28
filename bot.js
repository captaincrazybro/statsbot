
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});


const { CommandHandler } = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['.']
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setPresence({ status : 'online', game: { name : 'Super Paintball' } });
});

client.on('error', console.error);
bot.on('error', e => console.log(e))

bot.on("message", async (message) => {

    //if(message.guild.id == '218717028423434241'){

        if(message.channel.type === 'dm') return;
        if(message.author.type === 'bot') return;
        let args = message.content.split(" ");
        let command = args[0];
        let cmd = CH.getCommand(command);
        if(!cmd) return; 
    
        try{
            cmd.run(bot,message,args)
        }catch(e){
            console.log(e)
        } 

    //}   

})


bot.login("token");