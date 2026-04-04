import {
  computeOrder,
  generateOrderSummaryHTML,
  generateSubmissionHTML,
} from "./utils.js";

export default function Order(root, checkout, menuData, cartContext) {
  const summaryEl = root.querySelector("[data-order-summary]");

  cartContext.cartChanged.push(renderOrder);

  renderOrder(cartContext.getCart());

  root
    .querySelector("[data-complete-order]")
    .addEventListener("click", handleCompleteOrderClick);

  function renderOrder(cart) {
    if (cart.length <= 0) {
      root.style.display = "none";
      return;
    }

    root.style.display = "block";
    const order = computeOrder(cart, menuData);

    summaryEl.innerHTML = generateOrderSummaryHTML(order);
  }

  function handleCompleteOrderClick() {
    checkout.style.display = "block";
    checkout.focus();
  }

  function renderSubmission(name) {
    root.innerHTML = generateSubmissionHTML(name);
  }

  return {
    renderSubmission,
  };
}
