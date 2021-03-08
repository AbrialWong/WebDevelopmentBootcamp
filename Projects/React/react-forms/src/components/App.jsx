import React, {useState} from "react";

function App() {

  const [name, setName] = useState(""); 
  const[headingText, setHeading] = useState("");

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event){
    setHeading(name);

    //preventDefault() is a method that prevent the default next behaviour of the event 
    event.preventDefault(); // prevent the page input from refreshing after pressing on submit
    
  }

  
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
   
   <form onSubmit={handleClick}>
    { /*controlled Component */ }
      <input onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value={name} />
      
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
