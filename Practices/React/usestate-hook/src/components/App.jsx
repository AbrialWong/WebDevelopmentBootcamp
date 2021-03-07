import React, { useState } from "react";

function App(){
const state = useState(123);

console.log(state[0]);

function increase (){
  //count ++;
}

return (
  <div className="container">
    <h1>{state[0]}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);

}

export default App;
