import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

window.initReactApp = () => {
  const container = document.getElementById("react-root");
  if (!container) {
    console.error("React root container not found.");
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};
