import { createContext, useState } from "react";
import { apiGet, tryCatch } from "../utils";
import { getUsers } from "./action";

const context = createContext();

const initialState = {
  listings: [],
  loading: false,
  error: null,
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <context.Provider value={{ ...state, getUsers }}>
      {children}
    </context.Provider>
  );
};

export { context, ContextProvider };
