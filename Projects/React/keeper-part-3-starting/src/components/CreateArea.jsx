import React, {useState} from "react";
import Note from "./Note";

function CreateArea(props) {

  //- Create a constant that keeps track of the title and content.
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
//- Create a constant that keeps track of the title and content.
  function handleChange(event){
    const {name, value}= event.target;

//- Create a constant that keeps track of the title and content.
    setNote(prevNote => {
      return {
        ...prevNote,
        [name] :value
      };
    });
  }

  //- Pass the new note back to the App.
  function submitNote(event){

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    //- Pass the new note back to the App.
    event.preventDefault();

  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea
        name="content" onChange={handleChange} 
        value={note.content} 
        placeholder="Take a note..." 
        rows="3" 
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
