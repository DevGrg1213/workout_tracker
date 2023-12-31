import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { WorkoutContextProvider } from "./context/WorkoutsContext";
import { AuthContextProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
