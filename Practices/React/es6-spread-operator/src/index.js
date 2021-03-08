import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["lime", "lemon", "orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

const fullName = {
fName: "James",
lName : "Ben"
}

const user = {
    ...fullName,
    id: 1,
    username: "J_B",
}

console.log(user);