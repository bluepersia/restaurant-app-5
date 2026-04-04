import { computeOrder, generateOrderSummaryHTML } from "./utils.js";

export default function Order(root, menuData, cartContext) {
  const summaryEl = root.querySelector("[data-order-summary]");

  cartContext.cartChanged.push(renderOrder);

  renderOrder(cartContext.getCart());

  function renderOrder(cart) {
    if (cart.length <= 0) {
      root.style.display = "none";
      return;
    }

    root.style.display = "block";
    const order = computeOrder(cart, menuData);

    summaryEl.innerHTML = generateOrderSummaryHTML(order);
  }
}
