//jshint esversion:6
// 1. Install mongoose to your project :- npm i mongoose in cmd

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require ("mongoose"); // 2. Require mongoose in file
const _ = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// 3. Connect a new database called blogDb 
mongoose.connect("mongodb://localhost:27017/blogDB", {useUnifiedTopology: true, useNewUrlParser:true});

// 4. Create a new postSchema that contain title and content
const postSchema = {
title :String,
content: String
};

// 5. Create a mongoose model using the schema to define your posts collection
const Post = mongoose.model("Post",postSchema);

// 8. Delete the existing post array
// let posts = [];

app.get("/", function(req, res){

  // 9. Find all the post in the posts collection and render it to the home.ejs file  
  Post.find({}, function(err,posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
    });
  });

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  
  // 6. Inside the app.post() method for /compose route, create a new post document using the mongoose model
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  // 7. Save the document to your db instead of pushing to the post array
  // 10. Add a callback to the mongoose save() method so that it only redirect to the home page once save is complete with no errors
  post.save(function(err){
    if(!err){
      res.redirect("/");
    } 
  });
});

// 12. Change the express route parameter to postId instead.
app.get("/posts/:postId", function(req, res){

// const requestedTitle = _.lowerCase(req.params.postName);

// 13. Need a constant to store the postId parameter value
  const requestedPostId = req.params.postId; 

//14. Use the findOne() method to find the post with a matching id in the posts collection.
Post.findOne({_id:requestedPostId}, function(err,post){
  // 15. If no error, 
  res.render("post",{
    title: post.title,
    content:post.content 
 });
});  
  // posts.forEach(function(post){
  //   const storedTitle = _.lowerCase(post.title);

  //   if (storedTitle === requestedTitle) {
  //     res.render("post", {
  //       title: post.title,
  //       content: post.content
  //     });
  //   }
  // });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});