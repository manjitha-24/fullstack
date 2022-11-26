const request = require("request");

request(
    "http://www.omdbapi.com/?i=tt3896198&apikey=5b0f1c19",
    function (err, responce, body){
        console.log(body);
    }
);