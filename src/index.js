import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/ThemeToggleButton/ToggleButton.css";
import "./style/index.scss";
import App from "./App";
import ThemeContextProvider from "Context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
