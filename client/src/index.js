import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { legacy_createStore as createStore } from "redux";
import App from "./App";

const initialState = {
  maplevel: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NUMBER":
      return { ...state, maplevel: action.maplevel };
    default:
      return state;
  }
}

let store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
