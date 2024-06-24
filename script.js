// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleMenuButton = document.getElementById("toggleMenu");
  const menu = document.querySelector(".menu");

  toggleMenuButton.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
  });
});
