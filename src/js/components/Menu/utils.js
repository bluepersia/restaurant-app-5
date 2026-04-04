function generateMenuHTML(menuData) {
  return menuData
    .map(
      ({ id, emoji, name, ingredients, price }) => `
        <li class="menu-item">
              <p class="menu-item__emoji">${emoji}</p>
              <div class="menu-item__content">
                <h3 class="menu-item__name">${name}</h3>
                <p class="menu-item__ingredients">${ingredients}</p>
                <p class="menu-item__price">$${price}</p>
              </div>
              <button class="menu-item__add-btn" aria-label="Add to order" data-add="${id}">
                +
              </button>
        </li>
            `,
    )
    .join("\n");
}

export { generateMenuHTML };
