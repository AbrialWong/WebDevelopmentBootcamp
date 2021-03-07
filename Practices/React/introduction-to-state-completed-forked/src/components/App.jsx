import React from "react";

function strike(){
  /******* Imperative Programming ***********/
   document.getElementById("root").style.textDecoration = "line-through"; 
  }
function unstrike(){
  /******* Imperative Programming ***********/
   document.getElementById("root").style.textDecoration = null;
}

function App() {
return(
  /******* Imperative Programming ***********/
<div>
  <p>Buy Milk</p>
  <button onClick={strike}>Change to strike Through</button>
  <button onClick={unstrike}>unstrike</button>
</div>
)

  // /************* # Declarative Programming ******************/
  // var isDone = false;

  // const strikeThrough = {textDecoration:"line-through"}

  // return (<p style={isDone ? strikeThrough : null}>Buy Milk</p>);
  // // This also works <p style={isDone && strikeThrough}>Buy Milk</p>
 }

export default App;
