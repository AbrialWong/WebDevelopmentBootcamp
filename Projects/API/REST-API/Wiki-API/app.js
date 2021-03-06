// jshint esversion: 6
// Task: Delete a Specific Article

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

/////////////////////////// Request Targeting All Articles /////// //////////
app.route("/articles")

.get(function(req,res){
    Article.find({}, function(err,foundArticles){
        if(!err){
        res.send(foundArticles);
    } else{
        res.send(err);
    }
    });
})

.post(function(req,res){
    console.log("Title: "+ req.body.title);
    console.log("Content: "+ req.body.content);

    const newArticle = new Article({
        title : req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err){
        if(!err){
            res.send("Successfully added a new article");
        }else{
            res.send(err);
        }
    });
})

.delete(function(req,res){
    Article.deleteMany(function(err){
    if(!err){
        res.send("Successfully deleted all articles.");
    }else{
        res.send(err);
    }
    });
    });

/////////////////////////// Request Targeting A Specific Articles /////// //////////

app.route("/articles/:articleTitle")

.get(function(req,res){
    Article.findOne({title:req.params.articleTitle }, function(err, foundArticle){
        if (foundArticle){
            res.send(foundArticle);
        }else{
            res.send("No articles matching that title was found.");
        }
    })
})
.put(function(req,res){
    Article.update(
        {title:req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {override:true},
        function(err, result){
            if(!err){
                res.send("Successfully updated article");
            }else{
                res.send("No Articles have been updated.")
            }
        })
})

.patch(function(req,res){
    Article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Successfully update articles");
            } else{
                res.send(err);
            }
        } 
        );
})

.delete(function(req,res){
    Article.deleteOne(
        {title: req.params.article.articleTitle},
        function(err){
            if(!err){
                res.send("Successfully deleted the corresponding articles")
            }else{
                res.send(err);
            }
        }
);
});


// Set app to listen to port 3000
app.listen("3000", function(){
console.log("Server is running on 3000");
}); 