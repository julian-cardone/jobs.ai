// src/index.js

import React from "react";
import "./index.css";
import "./reset.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/store";
import { createRoot } from "react-dom/client";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { UserProvider } from "./context/currentSession";

let store = configureStore({});
const domNode = document.getElementById("root");
const root = createRoot(domNode);

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
