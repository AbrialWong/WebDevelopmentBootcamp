//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";

function Footer(){

    const date = new Date();
    const year = date.getFullYear();

return(<footer> <p>copyright {year}</p></footer>);
}

export default Footer;