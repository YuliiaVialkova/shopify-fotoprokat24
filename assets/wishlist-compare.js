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
  console.log(`updated ${type}:`, items);
}

function initWishlistCompare() {
  ["wishlist", "compare"].forEach((type) => {
    const items = JSON.parse(localStorage.getItem("shopify_" + type) || "[]");

    items.forEach((id) => {
      const buttons = document.querySelectorAll(`[data-product-id="${id}"]`);
      buttons.forEach((btn) => {
        if (btn.getAttribute("onclick").includes(type)) {
          btn.classList.add("is-active");
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initWishlistCompare);
