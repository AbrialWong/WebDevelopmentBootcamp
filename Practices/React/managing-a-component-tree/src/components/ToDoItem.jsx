// /************* When user click on the individual item, item get delete away from the list *****************/
import React from "react"

function ToDoItem(props){
    return(
        <div onClick={()=>{
            props.onChecked(props.id);
        }}>
            <li> 
            {props.text}
            </li>
        </div>) 
}

export default ToDoItem;

// /************* When user click on the individual item, item get strikethrough *****************/
//  import React from "react"

// function ToDoItem(props){
    
//     const [isDone, setIsDone] = useState(false);
    
//     function handleClick(){
        
//         setIsDone((prevValue) => {
//             return !prevValue;
//         })
//     }
//     return(
//         <div onClick={handleClick}>
//             <li> 
//             {props.text}
//             </li>
            
//              <li style={{textDecoration: isDone ? "line-through" : "none"}}>
//                 {props.text}</li> 
//         </div>) 
// }

// export default ToDoItem;