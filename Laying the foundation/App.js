import React from "react";
import ReactDOM from "react-dom";

const elem = (
  <h1 id="head" className="heading">
    Hi Hari!
  </h1>
);

const HeadingComponent = () => {
  return <h1> This is functional component</h1>;
};

const ContainerComponent = () => (
  <div id="container">
    <HeadingComponent />
    {elem}
    <p className="para">Hi there </p>
    <p> Love you {3 * 100 * 10} </p>
    {Main()}
  </div>
);

const Main = () => (
  <div id="main">
    <p>Hello everyone</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerComponent />);
