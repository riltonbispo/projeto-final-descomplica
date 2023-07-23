// CartContext.tsx
import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
  useEffect,
} from "react";

import { productType } from "../types/allTypes";
import { ActionsCartType } from "../reducers/cartReducer";
import { cartReducer } from "../reducers/cartReducer";

export interface CartItem extends productType {
  quantity: number;
}

type CartContextType = {
  cartItems: CartItem[];
  dispatch: Dispatch<ActionsCartType>;
  addToCart: (p: productType) => void;
  removeToCart: (n: number) => void;
};

const STORAGE_KEY = "cartContextProducts";

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: productType) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeToCart = (productId: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, dispatch, addToCart, removeToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
