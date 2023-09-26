const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "disabled";

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

if (isDarkMode) {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function copyEmail() {
  var email = "rehmat4813.be21@chitkara.edu.in";
  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Email address copied to clipboard!");
}

function copyPhoneNumber() {
  var phoneNumber = "+917988199822";
  var tempInput = document.createElement("input");
  tempInput.value = phoneNumber;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Phone number copied to clipboard!");
}
