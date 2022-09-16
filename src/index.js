import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ListStore from './store/ListStore'
import "swiper/css/bundle";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      list: new ListStore(),
    }}
  >
    <App />
  </Context.Provider>
);
