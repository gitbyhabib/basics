import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./views/header";

import "./styles/style.css";

const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
