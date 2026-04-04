import Checkout from "./components/Checkout/Checkout.js";
import Menu from "./components/Menu/Menu.js";
import Order from "./components/Order/Order.js";
import CartContext from "./contexts/CartContext/CartContext.js";
import menuData from "./data/menuData.js";

const cartContext = CartContext();
const checkout = document.getElementById("checkout");

Menu(document.getElementById("menu-list"), menuData, cartContext);
const order = Order(
  document.getElementById("order"),
  checkout,
  menuData,
  cartContext,
);

Checkout(document.getElementById("checkout"), order);
