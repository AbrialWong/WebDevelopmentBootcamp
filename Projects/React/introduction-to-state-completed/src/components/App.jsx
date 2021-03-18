/* -------------------- Imperative Programming Example 2 ---------------- */

import React from "react";

function strike(){
  document.getElementById("root").style.textDecoration="line-through";
}

function unstrike(){
  document.getElementById("root").style.textDecoration= null;
}

function App() {
  return(
    <div>
  <p>Buy Milk</p>
  <button onClick={strike}>Change to strike through</button>
  <button onClick={unstrike}>Undo</button>

  </div>
    ) };

export default App;
/* -------------------- Imperative Programming Example 2 ---------------- */

// /* -------------------- Imperative Programming Example 1 ---------------- */

// import React from "react";

// function App() {
//   return <p>Buy Milk</p>
// }

// export default App;
// /* -------------------- Imperative Programming Example 1 ---------------- */

// /* -------------------- Declarative Programming ---------------- */

// import React from "react";

// function App() {
  
//   var isDone = true;

//   const strikeThrough = {textDecoration : "line-through"}
//   return <p style={isDone ? strikeThrough : null}>Buy Milk</p>
// }

// export default App;

// /* -------------------- Declarative Programming ---------------- */
