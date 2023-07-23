import { productType } from "../types/allTypes";
import { CartItem } from "../contexts/CartContext";

type AddToCart = {
  type: "ADD_TO_CART";
  payload: productType;
};

type RemoveFromCart = {
  type: "REMOVE_FROM_CART";
  payload: number;
};

export type ActionsCartType = AddToCart | RemoveFromCart;

export const cartReducer = (state: CartItem[], action: ActionsCartType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingCartItem = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      const cartItemToRemove = state.find((item) => item.id === action.payload);
      if (cartItemToRemove) {
        if (cartItemToRemove.quantity === 1) {
          return state.filter((item) => item.id !== action.payload);
        } else {
          return state.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
      return state;
    default:
      return state;
  }
};
