import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DataPovider } from "./Components/DataProvider/DataProvider.jsx";
import { reducer, initialState } from "./Utility/reducer.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataPovider reducer={reducer} initialState={initialState}>
      <App />
    </DataPovider>
  </React.StrictMode>
);
