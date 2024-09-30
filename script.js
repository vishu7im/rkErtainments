const closeMenu = document.getElementById("closeMenu");
const floatingMenu = document.getElementById("floatingMenu");
const openMenuButton = document.getElementById("openMenu");

openMenuButton.addEventListener("click", () => {
  floatingMenu.style.right = "0"; // Show the menu
});

closeMenu.addEventListener("click", () => {
  floatingMenu.style.right = "-300px"; // Hide the menu
});
