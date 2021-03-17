import React, {useState} from "react";

function App() {

  const[fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    
    /* Shorter version */
    // const {value,name} = event.target;

    // setFullName((prevValue)=>{
    //   if(name === "fName"){
    //     return {
    //       fName : value,
    //       lName : prevValue.lName
    //     }
    //   }else if (name === "lName"){
    //     return {
    //       fName : prevValue.fName,
    //       lName : value
    //     }

    //   }
    // });

    /* Longer version */
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue)=>{
      if(inputName === "fName"){
        return {
          fName : newValue,
          lName : prevValue.lName
        }
      }else if (inputName === "lName"){
        return {
          fName : prevValue.fName,
          lName : newValue
        }

      }
    });
}


  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
        </h1>
      <form>
        <input name="fName" 
        onChange={handleChange} 
        placeholder="First Name"
        value = {fullName.fName}
        /> 
        
        <input name="lName" 
        onChange={handleChange} 
        placeholder="Last Name" 
        value = {fullName.lName}
        />
       
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
