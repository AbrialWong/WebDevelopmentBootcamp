//2. Create a App.jsx component.

import React from "react";
import Header from "../component/Header";
import Note from "../component/Note";
import Footer from "../component/Footer";

function App(){
return(
    <div>
<Header/>
<Note/>
<Footer/>
</div>
);
}

export default App;