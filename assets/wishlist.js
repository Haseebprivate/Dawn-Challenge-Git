const STORAGE_KEY = "wishlist";

// Toggle wishlist
document.addEventListener("click", (e) => {
  const button = e.target.closest(".wishlist-btn");

  if (!button) return;

  const handle = button.dataset.handle;

  let wishlist = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (wishlist.includes(handle)) {
    wishlist = wishlist.filter((item) => item !== handle);
    button.classList.remove("active");
  } else {
    wishlist.push(handle);
    button.classList.add("active");
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));

  updateWishlistCount();
});

// Initialize buttons
document.addEventListener("DOMContentLoaded", () => {
  const wishlist = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  console.log("Wishlist0:", wishlist);

  document.querySelectorAll(".wishlist-btn").forEach((button) => {
    if (wishlist.includes(button.dataset.handle)) {
      button.classList.add("active");
    }
  });

  updateWishlistCount();
});

function updateWishlistCount() {
  const count = document.querySelector("#wishlist-count");

  if (!count) return;

  const wishlist = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  count.textContent = wishlist.length;
}
