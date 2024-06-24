document.addEventListener("DOMContentLoaded", () => {
  const toggleMenuButton = document.getElementById("toggleMenu");
  const menu = document.querySelector(".menu");

  if (toggleMenuButton && menu) {
    toggleMenuButton.addEventListener("click", () => {
      menu.classList.toggle("show-menu");

      // Optional: Implement additional logic for accessibility or animation
      if (menu.classList.contains("show-menu")) {
        // Add focus management or animation logic when menu is shown
        // Example: menu.focus(); or animateMenuIn();
      } else {
        // Add logic when menu is hidden
        // Example: animateMenuOut();
      }
    });

    // Optional: Event delegation for sub-menu items or other interactive elements
    menu.addEventListener("click", (event) => {
      const target = event.target;
      // Example: Handle clicks on sub-menu items using event delegation
      // if (target.classList.contains("sub-menu-item")) {
      //   // Handle sub-menu item click
      // }
    });

    // Optional: Close menu when clicking outside (if applicable)
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !toggleMenuButton.contains(event.target)) {
        menu.classList.remove("show-menu");
        // Optional: Additional logic when clicking outside the menu
        // Example: animateMenuOut();
      }
    });

    // Optional: Close menu with Escape key (if applicable)
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        // Optional: Additional logic when Escape key is pressed
        // Example: animateMenuOut();
      }
    });
  }
});
