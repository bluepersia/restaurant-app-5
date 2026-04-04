function addToCart(state, id) {
  const newCart = [...state.cart];
  const itemInCart = state.cart.find((item) => item.id === id);

  if (itemInCart) {
    newCart[state.cart.indexOf(itemInCart)] = {
      id,
      quantity: itemInCart.quantity + 1,
    };
    return {
      ...state,
      cart: newCart,
    };
  }

  newCart.push({
    id,
    quantity: 1,
  });

  return {
    ...state,
    cart: newCart,
  };
}

export { addToCart };
