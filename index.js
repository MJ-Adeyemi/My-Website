const menuButton = document.getElementById("menuButton");
const menuBar = document.getElementById("menuBar");
const closeMenu = document.getElementById("closeMenu");

// Function to toggle menu visibility
menuButton.onclick = () => {
  menuBar.classList.remove("hidden");
};

// Function to hide the menu when clicking on the close button
closeMenu.onclick = () => {
  menuBar.classList.add("hidden");
};
