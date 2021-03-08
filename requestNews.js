const request = require('request');
var parseString = require('xml2js').parseString;

request('http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5', function (error, response, body) {
    var data = JSON.parse(body);
    data.articles.map((article) => {
        console.log(article.title)
    });
});
