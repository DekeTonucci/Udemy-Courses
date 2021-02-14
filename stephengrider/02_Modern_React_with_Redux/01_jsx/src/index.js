// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Hot reload index.js of CRA:
if (module.hot) {
  module.hot.accept();
}

// Create a React component
const App = function () {
  // const buttonText = "Click me";
  const labelText = ["Enter ", "Name: "];
  const buttonText = { text: "Click me!" };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React component and show in browser
ReactDOM.render(<App />, document.querySelector("#root"));
