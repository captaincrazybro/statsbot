const rp = require('request-promise');
const $ = require('cheerio');
const Discord = require("discord.js");

module.exports = class GetStats {
    
    constructor(){
        this.name = 'leaderboard',
        this.alias = ['leaderboards', 'top'],
        this.usage = ".leaderboard <type> <time>"
    }

    async run(bot, message, args){

        if(args.length == 1){
            return message.channel.send("Please specify a Type (Wins, Kills, Deaths etc)")
        }

        let type = args[1];

        if(args.length == 2){
            return message.channel.send("Please specify a Time (Monthly, Weekly, Daily)")
        }

        let time = args[2];

        switch(type.toLowerCase()){
            case("wins"):{

                var url;

                switch(time.toLowerCase()){
                    case("monthly"):{
                        url = "&boardType=monthly"
                        break;
                    }
                    case("weekly"):{
                        url = "&boardType=weekly"
                        break;
                    }
                    case("daily"):{
                        url = "&boardType=daily"
                        break;
                    }
                    case("alltime"):{
                        url = ""
                        break;
                    }
                    case ("all"):{
                        url = ""
                        break;
                    }
                    default:{
                        return message.channel.send("Invalid Time, please specify a valid time (Monthly, Weekly, Daily, Alltime");
                    }
                }
                
                let content = "";
                rp(`https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=wins${url}`)
                .then(function(html) {
                    //console.log($('.LeaderboardsOdd', html).text());
                    let i = 1;
                    $('tr', html).each(function(index, element){
                        if($(this).children()[3].children[0].data != "Wins"){
                            if(i == 11){
                                return 
                            }
                            content += i + " - `" + $(this).children()[2].children[0].children[0].data + "` -" + $(this).children()[3].children[0].data + "\n"
                            i++
                        }
                    })
                    //console.log($('.bday', html).text());
                })
                .then(function(){

                    let embed = new Discord.RichEmbed()
                        .setColor("DARK_GREEN")
                        .setTitle(`Wins Leaderboard ${time.toLowerCase()}`)
                        .setDescription(content);
        
                    message.channel.send(embed)

                })
                .catch(function(err) {
                    //handle error
                    console.log(err)
                    message.channel.send("The bot has encountered an error, please contant the staff");
                });
                break;
            }
            case("kills"):{
                
                var url;

                switch(time.toLowerCase()){
                    case("monthly"):{
                        url = "&boardType=monthly"
                        break;
                    }
                    case("weekly"):{
                        url = "&boardType=weekly"
                        break;
                    }
                    case("daily"):{
                        url = "&boardType=daily"
                        break;
                    }
                    case("alltime"):{
                        url = ""
                        break;
                    }
                    case ("all"):{
                        url = ""
                        break;
                    }
                    default:{
                        return message.channel.send("Invalid Time, please specify a valid time (Monthly, Weekly, Daily, Alltime");
                    }
                }
                
                let content = "";
                rp(`https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=kills${url}`)
                .then(function(html) {
                    //console.log($('.LeaderboardsOdd', html).text());
                    let i = 1;
                    $('tr', html).each(function(index, element){
                        if($(this).children()[3].children[0].data != "Wins"){
                            if(i == 11){
                                return 
                            }
                            content += i + " - `" + $(this).children()[2].children[0].children[0].data + "` -" + $(this).children()[3].children[0].data + "\n"
                            i++
                        }
                    })
                    //console.log($('.bday', html).text());
                })
                .then(function(){

                    let embed = new Discord.RichEmbed()
                        .setColor("DARK_GREEN")
                        .setTitle(`Kills Leaderboard ${time.toLowerCase()}`)
                        .setDescription(content);
        
                    message.channel.send(embed)

                })
                .catch(function(err) {
                    //handle error
                    console.log(err)
                    message.channel.send("The bot has encountered an error, please contant the staff");
                });
                break;
            }
            case("deaths"):{
                
                var url;

                switch(time.toLowerCase()){
                    case("monthly"):{
                        url = "&boardType=monthly"
                        break;
                    }
                    case("weekly"):{
                        url = "&boardType=weekly"
                        break;
                    }
                    case("daily"):{
                        url = "&boardType=daily"
                        break;
                    }
                    case("alltime"):{
                        url = ""
                        break;
                    }
                    case ("all"):{
                        url = ""
                        break;
                    }
                    default:{
                        return message.channel.send("Invalid Time, please specify a valid time (Monthly, Weekly, Daily, Alltime");
                    }
                }
                
                let content = "";
                rp(`https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=deaths${url}`)
                .then(function(html) {
                    //console.log($('.LeaderboardsOdd', html).text());
                    let i = 1;
                    $('tr', html).each(function(index, element){
                        if($(this).children()[3].children[0].data != "Wins"){
                            if(i == 11){
                                return 
                            }
                            content += i + " - `" + $(this).children()[2].children[0].children[0].data + "` -" + $(this).children()[3].children[0].data + "\n"
                            i++
                        }
                    })
                    //console.log($('.bday', html).text());
                })
                .then(function(){

                    let embed = new Discord.RichEmbed()
                        .setColor("DARK_GREEN")
                        .setTitle(`Deaths Leaderboard ${time.toLowerCase()}`)
                        .setDescription(content);
        
                    message.channel.send(embed)

                })
                .catch(function(err) {
                    //handle error
                    console.log(err)
                    message.channel.send("The bot has encountered an error, please contant the staff");
                });
                break;
            }
            default:{
                return message.channel.send("Invalid Type, please specify a valid type (Wins, Kills, Deaths")
            }
        }



    }

}