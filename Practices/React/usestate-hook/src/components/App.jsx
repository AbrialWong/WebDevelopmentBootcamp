import React, { useState } from "react";

function App(){
  //const state = useState(123); // useState(n) :- n is the initial state

  const [count, setCount] = useState(0); 

  /* Destructuring Examples */
  const [red, green, blue] = [234, 134, 133];

  function decrease(){
    setCount(count -1);
  }

function increase(){
  //count++;
  setCount(count + 1);
  }  

return (
  <div className = "container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
);

}

export default App;
