// Detecting Button Presses
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++ ){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); //addEventListener("[Event]", [Name_of_Function] )

function handleClick(){
var buttonInnerHTML = this.innerHTML; // if a btn was press, check the innerHTML of the btn that got press
makeSound(buttonInnerHTML); // send that btn to makeSound function, to play the relevant sound
buttonAnimation(buttonInnerHTML);
}

// Detecting Keyboard Press
document.addEventListener("keypress", function(event){// when running the entire document,when there is a keypress, call an anoymonous function
makeSound(event.key); // the "event" contains a property called "key"
buttonAnimation(event.key); 
});

 function makeSound(key){ // will take a parameter named "key"
 switch (key) {
  case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break; // exit the switch statement
  
  case "a":
    var crash = new Audio('sounds/crash.mp3');
    crash.play(); 
    break; // exit the switch statement

    case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break; // exit the switch statement
  
    case "d":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break; // exit the switch statement

    case "j":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break; // exit the switch statement

    case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break; // exit the switch statement

    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    
    break; // exit the switch statement
    
  default: // will trigger when input is not 'w','a','s','d','j','k','l'
   
}
 }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey); // activeButton is found based on the currentKey
  activeButton.classList.add("pressed"); // add the classname "pressed" to the activeButton to give that effect.
  setTimeout(function(){
activeButton.classList.remove("pressed");
  }, 100); // after waiting for 1s, remove the class "press" from the classList

}