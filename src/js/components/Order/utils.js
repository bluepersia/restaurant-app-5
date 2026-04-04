function computeOrder(cart, menuData) {
  const items = cart.map((cartItem) => {
    const dataItem = menuData.find((i) => i.id === cartItem.id);

    return {
      ...cartItem,
      ...dataItem,
      getSubtotal: function () {
        return this.price * this.quantity;
      },
    };
  });

  const total = items.reduce((prev, curr) => prev + curr.getSubtotal(), 0);
  const allDiscounts = calculateDiscounts(items);
  console.log(allDiscounts);
  const totalDiscount = allDiscounts.reduce(
    (prev, curr) => prev + curr.amount,
    0,
  );

  return {
    items,
    allDiscounts,
    total: total - totalDiscount,
  };
}

function calculateDiscounts(items) {
  const allDiscounts = [];
  const comboDiscount = calculateComboDiscount(items);

  if (comboDiscount) {
    allDiscounts.push(comboDiscount);
  }

  return allDiscounts;
}

function calculateComboDiscount(items) {
  let combos = [];

  for (const item of items) {
    if (item.name === "Hamburger" || item.name === "Pizza") {
      for (let i = 0; i < item.quantity; i++) {
        combos.push({
          food: item,
          drink: null,
        });
      }
    }
  }
  for (const item of items) {
    if (item.name === "Beer") {
      for (let i = 0; i < item.quantity; i++) {
        const match = combos.find((combo) => combo.food && !combo.drink);

        if (match) {
          match.drink = item;
        }
      }
    }
  }

  combos = combos.filter((combo) => combo.food && combo.drink);

  if (combos.length > 0) {
    return {
      name: "Food+Drink Combo",
      amount: combos.reduce((prev, curr) => {
        const comboTotal = curr.food.price + curr.drink.price;
        const amount = Math.round(comboTotal * 0.15);
        return prev + amount;
      }, 0),
    };
  }
  return null;
}

function generateOrderSummaryHTML(order) {
  return `
    <ul class="order__items reset-list">
              ${order.items
                .map(
                  (item) => `
                <li class="order-item">
                <h3 class="order-item__name">${item.name}${item.quantity > 1 ? ` (${item.quantity})` : ""}</h3>
                <button class="order-item__remove-btn" data-remove="${item.id}">remove</button>
                <p class="order-item__price">$${item.getSubtotal()}</p>
              </li>`,
                )
                .concat(
                  order.allDiscounts.map(
                    (discount) => `
                    <li class="order-item">
                        <h3 class="order-item__name">${discount.name}</h3>
                        <p class="order-item__price">-$${discount.amount}</p>
                    </li>`,
                  ),
                )
                .join("\n")}
            </ul>

            <div class="order__total order-item">
              <h3 class="order-item__name">Total price:</h3>
              <p class="order-item__price">$${order.total}</p>
            </div>`;
}

function generateSubmissionHTML(name) {
  return `
    <div class="submission container">
        <p class="submission__text">Thanks, ${name}! Your order is on its way!</p>
    </div>`;
}

export { generateOrderSummaryHTML, computeOrder, generateSubmissionHTML };
