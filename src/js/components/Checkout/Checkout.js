export default function Checkout(root, order) {
  const formEl = root.querySelector("[data-form]");

  formEl.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");

    root.style.display = "none";
    order.renderSubmission(name);
  }
}
