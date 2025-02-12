import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is the First React Project"
);

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(heading);
