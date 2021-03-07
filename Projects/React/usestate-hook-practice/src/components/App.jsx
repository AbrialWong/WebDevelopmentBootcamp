import React, { useState } from "react";

function App() {

  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second:"2-digit" ,hour12: false });
  console.log(now);
   const[time , setTime] = useState(now);

   function updateTime(){
     const newTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second:"2-digit" ,hour12: false });
    setTime(newTime);

   }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
