const rp = require('request-promise');
const $ = require('cheerio');
const Discord = require("discord.js");

module.exports = class GetStats {
    
    constructor(){
        this.name = 'stats',
        this.alias = ['getstats'],
        this.usage = ".stats <player>"
    }

    async run(bot, message, args){

        if(args.length == 1){
            return message.channel.send("Please specify a player")
        }

        let player = args[1];

        var wins;
        var kills;
        var deaths;

        rp('https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=wins')
            .then(function(html) {
                //console.log($('.LeaderboardsOdd', html).text());
                $('tr', html).each(function(index, element){
                    if($(this).children()[3].children[0].data != "Wins"){
                        if($(this).children()[2].children[0].children[0].data.toLowerCase() == player.toLowerCase()){
                            wins = $(this).children()[3].children[0].data;
                            return
                        }
                    }
                })
                //console.log($('.bday', html).text());
            })
            .then(function(){
                rp('https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=kills')
                .then(function(html) {
                    //console.log($('.LeaderboardsOdd', html).text());
                    $('tr', html).each(function(index, element){
                        if($(this).children()[3].children[0].data != "Wins"){
                            if($(this).children()[2].children[0].children[0].data.toLowerCase() == player.toLowerCase()){
                                kills = $(this).children()[3].children[0].data;
                                return
                            }
                        }
                    })
                    //console.log($('.bday', html).text());
                })
                .then(function(){

                    rp('https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=deaths')
                    .then(function(html) {
                        //console.log($('.LeaderboardsOdd', html).text());
                        $('tr', html).each(function(index, element){
                            if($(this).children()[3].children[0].data != "Wins"){
                                if($(this).children()[2].children[0].children[0].data.toLowerCase() == player.toLowerCase()){
                                    deaths = $(this).children()[3].children[0].data;
                                    return
                                }
                            }
                        })
                        //console.log($('.bday', html).text());
                    })
                    .then(function(){
            
                        if(wins == undefined && kills == undefined && deaths == undefined){
                            return message.channel.send("This player does not exist");
                        }

                        if(wins == undefined){
                            wins == "undefined"
                        }
            
                        if(kills == undefined){
                            kills == "undefined"
                        }

                        if(deaths == undefined){
                            deaths == 'undefined'
                        }
                
                        let embed = new Discord.RichEmbed()
                            .setColor("DARK_BLUE")
                            .setTitle(`${player}'s stats`)
                            .addField("Wins", wins)
                            .addField("Kills", kills)
                            .addField("Deaths", deaths)
                            .setThumbnail(`http://minotar.net/helm/${player}/64.png`)
            
                        message.channel.send(embed)
    
                    })
                    .catch(function(err) {
                        //handle error
                        console.log(err)
                        message.channel.send("The bot has encountered an error, please contant the staff");
                    });

                })
                .catch(function(err) {
                    //handle error
                    console.log(err)
                    message.channel.send("The bot has encountered an error, please contant the staff");
                });
            })
            .catch(function(err) {
                //handle error
                console.log(err)
                message.channel.send("The bot has encountered an error, please contant the staff");
            });


    }

}