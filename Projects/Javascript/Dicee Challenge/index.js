var num1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + num1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var num2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + num2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

if (num1 > num2 ){
     document.querySelector("h1").innerHTML= "Player 1 wins";
}
else if (num1 < num2 ){
    document.querySelector("h1").innerHTML= "Player 2 wins";
}
else if (num1 === num2 ){
    document.querySelector("h1").innerHTML= "Draws";
}








