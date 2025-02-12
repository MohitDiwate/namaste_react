import React from "react";
import ReactDOM from "react-dom/client";

// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Heading 1"),
//   React.createElement("h2", {}, "Heading 2"),
//   React.createElement("h3", {}, "Heading 3"),
// ]);

// const headerJSX = (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

// const HeaderComponent = () => {
//   return (
//     <div className="title">
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading 3</h3>
//     </div>
//   );
// };

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src="https://img.icons8.com/?size=100&id=113665&format=png" />
      <input type="search" placeholder="Search..." />
      <img src="http://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<HeaderComponent />);
