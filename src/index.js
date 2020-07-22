import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureSoter, configureStore } from "./store";
import App from "./App.js";
import { createStore } from "redux";

const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
