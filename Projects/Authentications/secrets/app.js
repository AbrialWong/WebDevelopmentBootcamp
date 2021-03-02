//jshint esversion:6
// Task: Add Cookies & Sessions using Passport
// resource: https://www.npmjs.com/package/express-session
// http://www.passportjs.org/docs/downloads/html/

require('dotenv').config(); // Step 1: Define env variable
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

// Set up session
app.use(session({
 secret:"Our little secret.",
 resave : false,
 saveUninitialized: false
 }));

app.use(passport.initialize()); // initiazed and start using passport
app.use(passport.session()); //tell the app to use passport and also to set up the session

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema( {
    email: String,
    password: String
});

 userSchema.plugin(passportLocalMongoose); // setup userSchema to use passportLocalMongoose as a plugin

const User = new mongoose.model("User", userSchema);

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy()); //use the passportLocalMongoose to create a login Strategy

//set a passport to serialised and deserialized our users
passport.serializeUser(User.serializeUser()); 
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req,res){
    res.render("home");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.get("/register", function(req,res){
    res.render("register");
});

app.get("/secrets", function(req,res){
    if(req.isAuthenticated()){
        res.render("secrets");
    }else{
        res.redirect("/login");
    }
})

app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

app.post("/register", function(req,res){
    User.register({username:req.body.username}, req.body.password, function(err,user){
    if(err){
       console.log(err);
           res.redirect("/register"); 
    }else{
        passport.authenticate("local")(req,res, function(){
            res.redirect("/secrets");
        });
    }
    });
});

app.post("/login", function(req,res){
    
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err){
        if(err){
           console.log(err); 
        }else{
            passport.authenticate("local")(req,res, function(){
                res.redirect("/secrets");
            });
        }
    });
});

app.listen(3000, function(req,res){
console.log("Server is running on 3000");
});