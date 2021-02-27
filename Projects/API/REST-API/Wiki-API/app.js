// jshint esversion: 6

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const express = require("express");

const app = express();

// set view engine to use ejs
app.set('view engine', 'ejs');

app.use(express.static('public')); // use public directory to store static files like images and css codes 
app.use(bodyParser.urlencoded({extended:false}));//use body parser to pass our request

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true}); // 1) set up mongodb

// 2. Create Article Schema
const articlesSchema = {
title : String,
content : String
};

// 3. Create "article" collection using mongoose
const Article = mongoose.model('Article', articlesSchema);

app.get("/articles", function(req,res){
Article.find({}, function(err,foundArticles){
    if(!err){
    res.send(foundArticles);
} else{
    res.send(err);
}
});
});

// Set app to listen to port 3000
app.listen("3000", function(){
console.log("Server is running on 3000");
}); 