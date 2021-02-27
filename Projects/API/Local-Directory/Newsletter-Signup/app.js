const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
//console.log("Get route is running");
});

app.post("/", function(req,res){
var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;

var data = {
members : [
    {
        email_address:email,
        status:"subscribed",
        merge_fields:{
            FNAME:firstName,
            LName:lastName
        }


    }
]
}

});

app.listen(3000, function(){
    console.log("Server is running on 3000");
});

//API key : 9af2db29e996a1da74e0a5f9c2ad336a-us7