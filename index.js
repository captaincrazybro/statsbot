const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.mineplex.com/assets/www-mp/webtest/testy.php?game=super%20paintball&type=wins&boardType=monthly';

console.log(50/60);

rp(url)
  .then(function(html) {
    //console.log($('.LeaderboardsOdd', html).text());
    var i = 0;
        $('tr', html).each(function(index, element){
            if($(this).children()[3].children[0].data != "Wins"){
                if(i == 2) return;
                console.log($(this).children()[2].children[0].children[0].data)
                console.log($(this).children()[3].children[0].data);
                i++
            }
        })
    //console.log($('.bday', html).text());
  })
  .catch(function(err) {
    //handle error
  });