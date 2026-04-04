import { addToCart, removeFromCart } from "./utils.js";

export default function CartContext() {
  let state = {
    cart: [],
  };

  const cartChanged = [];

  function addItem(id) {
    state = addToCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  function removeItem(id) {
    state = removeFromCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  function getCart() {
    return state.cart;
  }

  return { addItem, removeItem, cartChanged, getCart };
}
