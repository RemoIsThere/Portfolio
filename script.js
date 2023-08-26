// document.addEventListener("DOMContentLoaded", function() {
//     const darkModeToggle = document.getElementById("darkModeToggle");
//     const body = document.body;
  
//     darkModeToggle.addEventListener("click", function() {
//       body.classList.toggle("dark-mode");
//     });
//   });
  // Get the dark mode toggle button element
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Get the body element
const body = document.body;

// Check if dark mode preference is set
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Function to enable dark mode
function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
}

// Initialize dark mode based on user preference
if (isDarkMode) {
  enableDarkMode();
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
