//jshint esversion:6
// URL: https://expressjs.com/en/starter/hello-world.html

const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // function that represent the express module that bind it to "app" variable

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
response.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculator is: " + result);   
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    
    var result = w / (h*h);
    console.log("Your BMI is "+result);
    res.send("The result of the calculator is: " + result);   

});

app.listen(3000, function(){
    console.log("Server started on port 3000");
}); // use the app to listen to the http port that is sent to the server 
