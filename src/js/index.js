import Menu from "./components/Menu/Menu.js";
import Order from "./components/Order/Order.js";
import CartContext from "./contexts/CartContext/CartContext.js";
import menuData from "./data/menuData.js";

const cartContext = CartContext();

Menu(document.getElementById("menu-list"), menuData, cartContext);
Order(document.getElementById("order"), menuData, cartContext);
