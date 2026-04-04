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

function removeFromCart(state, id) {
  const itemInCart = state.cart.find((item) => item.id === id);

  if (itemInCart) {
    const newItemInCart = { ...itemInCart };

    newItemInCart.quantity--;

    if (newItemInCart.quantity <= 0) {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }

    const newCart = [...state.cart];

    newCart[state.cart.indexOf(itemInCart)] = newItemInCart;

    return {
      ...state,
      cart: newCart,
    };
  }

  return state;
}

export { addToCart, removeFromCart };
