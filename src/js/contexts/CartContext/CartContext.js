import { addToCart } from "./utils.js";

export default function CartContext() {
  let state = {
    cart: [],
  };

  const cartChanged = [];

  function addItem(id) {
    state = addToCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  return { addItem, cartChanged };
}
