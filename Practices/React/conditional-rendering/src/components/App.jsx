import React from "react";
import Login from "./Login"

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">{
    // ternary, syntax: <Condition> ? <Do If true> : <Do If false>
    //isLoggedIn === true ? <h1>Hello</h1>:<Login />
    //AND operator <Condition> && <expression rendered>
    //currentTime > 12 &&  <h1>Why are you still working?</h1>
  }

    </div>
  );
}

export default App;
