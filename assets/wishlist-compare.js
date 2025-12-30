function toggleStorageItem(type, id, button) {
  const productId = String(id);
  let items = JSON.parse(localStorage.getItem("shopify_" + type) || "[]");
  const index = items.indexOf(productId);
  if (index > -1) {
    items.splice(index, 1);
    button.classList.remove("is-active");
  } else {
    items.push(productId);
    button.classList.add("is-active");
  }
  localStorage.setItem("shopify_" + type, JSON.stringify(items));
}

function initButtonStates() {
  ["wishlist", "compare"].forEach((type) => {
    const items = JSON.parse(localStorage.getItem("shopify_" + type) || "[]");

    items.forEach((id) => {
      const buttons = document.querySelectorAll(
        `.product-action-btn[data-product-id="${id}"][data-action="${type}"]`
      );
      buttons.forEach((btn) => {
        btn.classList.add("is-active");
      });
    });
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".product-action-btn");

  if (!button) return;

  const type = button.dataset.action;
  const id = button.dataset.productId;

  if (type && id) {
    toggleStorageItem(type, id, button);
  }
});

document.addEventListener("DOMContentLoaded", initButtonStates);
