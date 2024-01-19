import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>  (
    <h1 id="title" key="h2">
        Nms6te React!!
        </h1>
    );

const HeaderComponent = function() {
    return  (
    <div>
        {Title()}

        <h1>Namste React 456 !!!</h1>
        <h2>How are you guys!!</h2>
    </div>
    )
};

const HeaderComponent1 = () => {
    return  (
    <div>
        <h1>Namste React789 !!!</h1>
        <h2>How are you guys!!</h2>
    </div>
    )
};
const HeaderComponent2 = () => (
    <div>
    <h1>Namste React897 !!!</h1>
    <h2>How are you guys!!</h2>
    </div>
    );

// for calling funtionl component used < /> in root render
// for calling react element used element name simple
// and if react element want to use inside component used variable name in curly braces .
// calling a functional component inside another functional component there is 2 way bcz at the end of the day functional component a function we can also called it like a function calling second as we called compnent using </> closing tag.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);