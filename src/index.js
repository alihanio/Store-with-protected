import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <PersistGate loading="loading.." persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </HashRouter>
  </React.StrictMode>
);
