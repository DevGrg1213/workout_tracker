import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { WorkoutContextProvider } from "./context/WorkoutsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>
);
