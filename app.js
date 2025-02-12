import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is the First React Project"
// );

// console.log(heading);

// const jsxHeading = <h1 id="jsxheading">Hello World</h1>;
// console.log(jsxHeading);

// Create a functional Component

const link = <a href="">Click me</a>;
const Title = <h1>{link}: React by NamasteDev.com 💎</h1>;

const number = 2344;

const HeadingComponent = () => {
  return (
    <div>
      <h2>{console.log("sdkfhshdfhsdf")}</h2>
      {Title}
      <h1>Namaste React 🚀</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<HeadingComponent />);
