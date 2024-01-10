import React from "react";
import ReactDOM from "react-dom";

// Look at this code in react that changes the h1 content
// ReactDOM.render(<h1 className="header">Hello Everyone!</h1>, document.getElementById("root"));
/*
ReactDOM.render(
  <ul>
    <li>chocolate</li>
    <li>coconut</li>
  </ul>,
  document.getElementById("root")
);
function MainComponent() {
  return <h1>I am learning react</h1>
}
ReactDOM.render(
  <div>
    <MainComponent/>
  </div>,
  document.getElementById("root")
)
*/

// THis is the first line code in javascript that is more complex that the first line
/*
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
document.getElementById("root").append(h1)
*/

//Using DOM
/* const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);
*/

//JSX : JavaScript XML
//Using JSX: JS gives us objects that React can use them :
/*const element = <h1 className="header"> This is JSX</h1>;
console.log(element);

ReactDOM.render(element, document.getElementById("root"));

const page =( 
  <div>
    <h1>This is a header</h1>
    <p>This is a paragraph</p>
  </div>
)
console.log(page)
ReactDOM.render(
  page,
  document.getElementById("root1")
)
*/

const navbar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));



