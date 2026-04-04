import { generateMenuHTML } from "./utils.js";

export default function Menu(root, menuData, cartContext) {
  root.innerHTML = generateMenuHTML(menuData);

  root.addEventListener("click", handleMenuClicked);

  function handleMenuClicked(e) {
    if (e.target.dataset.add) {
      cartContext.addItem(Number(e.target.dataset.add));
    }
  }
}
