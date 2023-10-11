import React from "react";
import  ReactDOM  from "react-dom/client";
// import { ReactDOM } from "react-dom/client";

// const heading = React.createElement("h1", {id:"root"}, "Laying The Foundation✨");
// console.log(heading);


//jsx

const jsxheading = <h1>Laying the Foundation✨ from jsx</h1>
console.log(jsxheading);

//functional component

const HeadingComponent = () => (
    
        <h1>Namaste Janani</h1>
    
);

const TitleComponent = () => (
    <div id="sol">
        <HeadingComponent/>
        <h1>Namaste React</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//render reactelement

// root.render(heading);
// root.render(jsxheading);


//render functional co

root.render(<TitleComponent/>);

