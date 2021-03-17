//jshint esversion:6

/*
const fs = require("fs");

fs.copyFileSync("file1.txt","file2.txt"); // copyFileSync: Look into current directory, look for file1.txt and copy it into file2.txt then run cmd "node index.js" to see the file being created */

var superheroes = require("superheroes");
var mySuperheroName  = superheroes.random();
console.log(mySuperheroName);