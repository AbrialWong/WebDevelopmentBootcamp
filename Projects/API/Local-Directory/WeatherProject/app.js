//jshint eversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true})); // necessary code to pass through

app.get("/", function(req, res){
     res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    
    const query = req.body.cityName;
const apiKey = "6f111f2a7f4d9b7d3825cbacd3c98b14";
const units = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;

https.get(url, function(response){ // the callback function will give us a response
    console.log("Status Code of Server: " + response.statusCode);
    
    response.on("data", function(data){
       const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = " http://openweathermap.org/img/wn/"+icon+"@2x.png"

      res.write("<p>The weather is currently " + weatherDescription + " .</p>");
      res.write("<h1>The temperature in " + query +" is " + temp + " degree Celcius </h1>");
      res.write("<img src="+imageURL+">");
      res.send(); // send both res.write() statements
      //console.log("Temperature at London: "+ temp);
      //console.log("Weather description at London: " + weatherDescription);           
    });
});
})


app.listen(3000, function(){
console.log("This is port 3000 running");
});
