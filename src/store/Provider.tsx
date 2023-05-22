import { useReducer } from "react";
import { Appcontext, initialState, reducer } from "./Reducer";

type providerProps = {
  children: React.ReactNode;
};
// Create the provider component
export const AppProvider = ({ children }: providerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Appcontext.Provider value={{ state, dispatch }}>
      {children}
    </Appcontext.Provider>
  );
};
