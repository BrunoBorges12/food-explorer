/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useReducer, useContext } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface State {
  data: Product[];
}

interface Action {
  type: string;
  payload: { items: Product[] };
}

const initialState: State = {
  data: [],
};

const cartReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return {
        data: payload.items,
      };

    case "REMOVE":
      return {
        data: payload.items,
      };

    default:
      throw new Error("No case for that type");
  }
};

interface ContextProps {
  cart: State;
  dispatch: React.Dispatch<Action>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
}

const Context = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

const CartProvider: React.FunctionComponent = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product: Product) => {
    const isAddProduct = cart.data.find(
      (cartObject) => cartObject.id === product.id
    );
    console.log(isAddProduct);
    if (!isAddProduct) {
      const updatedCart = [...cart.data, product];
      dispatch({
        type: "ADD",
        payload: {
          items: updatedCart,
        },
      });
    }
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cart.data.filter(
      (currentProduct) => currentProduct.id !== id
    );

    dispatch({
      type: "REMOVE",
      payload: {
        items: updatedCart,
      },
    });
  };

  return (
    <Context.Provider value={{ cart, dispatch, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
};

const useCart = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
