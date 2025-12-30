function updateHeaderCounts() {
  ["wishlist", "compare"].forEach((type) => {
    const items = JSON.parse(localStorage.getItem("shopify_" + type)) || "[]";
    const count = items.length;

    const container = document.querySelector(`.js-${type}-container`);

    if (!container) return;

    const mobileBadge = container.querySelector(".js-badge-mobile");
    const desktopBadge = container.querySelector(".js-badge-desktop");

    if (count > 0) {
      if (mobileBadge) {
        mobileBadge.classList.remove("hidden");
      }
      if (desktopBadge) {
        desktopBadge.classList.remove("md:hidden");
        desktopBadge.classList.add("md:flex");
        desktopBadge.textContent = count;
      }
    } else {
      if (mobileBadge) {
        mobileBadge.classList.add("hidden");
      }
      if (desktopBadge) {
        desktopBadge.classList.add("md:hidden");
        desktopBadge.classList.remove("md:flex");
        desktopBadge.textContent = "";
      }
    }
  });
}

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
  updateHeaderCounts();
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
  updateHeaderCounts();
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
