import { Dispatch, createContext } from "react";

type Product = {
  img: string;
  title: string;
  price: number;
};

type AppState = {
  products: Product[];
};

export const initialState: AppState = {
  products: [],
};
export type ActionState = {
  type: "ADD_PRODUCT";
  payload: Product;
};
export const reducer = (
  state: AppState = initialState,
  action: ActionState
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
export const Appcontext = createContext<{
  state: AppState;
  dispatch: Dispatch<ActionState>;
}>({
  state: initialState,
  dispatch: () => null,
});
