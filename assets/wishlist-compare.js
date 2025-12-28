function toggleStorageItem(type, id, button) {
  let items = JSON.parse(localStorage.getItem("shopify_" + type) || "[]");
  const index = items.indexOf(id);
  if (index > -1) {
    items.splice(index, 1);
    button.classList.remove("is-active");
  } else {
    items.push(id);
    button.classList.add("is-active");
  }
  localStorage.setItem("shopify_" + type, JSON.stringify(items));
  console.log(`updated ${type}:`, items);
}
