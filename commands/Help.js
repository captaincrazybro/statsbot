const Discord = require("discord.js");
const CommandHandler = require("djs-commands")

module.exports = class GetStats {

    constructor(){
        this.name = 'help',
        this.alias = [''],
        this.usage = ['.help']
    }

    async run(bot, message, args){

        let embed = new Discord.RichEmbed()
            .setColor('GOLD')
            .addField("Gets the stats for a player", ".stats <player>")
            .addField("Gets the leaderboards for a certain stat type", ".leaderboard <type> <time>");

        message.author.send(embed)

    }

}