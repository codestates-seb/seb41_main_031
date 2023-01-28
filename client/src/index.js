import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { legacy_createStore as createStore } from "redux";
import App from "./App";

const SET_LOCATION = "SET_LOCATION";
const SET_LAT = "SET_LAT";
const SET_LNG = "SET_LNG";

const initialState = {
  maplevel: 1,
  address: {
    maplocation: "위치를 선택해 주세요",
    lat: 33.450701,
    lng: 126.570667,
  },
  postid: 1,
  state: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NUMBER":
      return { ...state, maplevel: action.maplevel };
    case SET_LOCATION:
      return {
        ...state,
        address: { ...state.address, maplocation: action.maplocation },
      };
    case SET_LAT:
      return { ...state, address: { ...state.address, lat: action.lat } };
    case SET_LNG:
      return { ...state, address: { ...state.address, lng: action.lng } };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "SET_POST":
      return { ...state, postid: action.postid };
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
