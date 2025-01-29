// Toggle the logout menu
function toggleLogoutMenu() {
  const logoutMenu = document.getElementById("logoutMenu");
  const overlay = document.getElementById("overlay");

  if (logoutMenu.classList.contains("show")) {
    closeLogoutMenu();
  } else {
    logoutMenu.classList.add("show");
    overlay.style.display = "block";
  }
}

// Function to close the logout menu
function closeLogoutMenu() {
  const logoutMenu = document.getElementById("logoutMenu");
  const overlay = document.getElementById("overlay");
  
  logoutMenu.classList.remove("show");
  overlay.style.display = "none";
}

// Logout function
function logout() {
  alert('You have logged out!'); // Placeholder for logout
  window.location.href = '/login.html';
}

// Close menu when clicking outside the box
document.addEventListener("click", function (event) {
  const logoutMenu = document.getElementById("logoutMenu");
  const logoutButton = document.getElementById("logoutButton"); // The button that opens the menu

  // If menu is open and click is outside the menu and button, close it
  if (
    logoutMenu.classList.contains("show") &&
    !logoutMenu.contains(event.target) &&
    !logoutButton.contains(event.target)
  ) {
    closeLogoutMenu();
  }
});

// Close menu when clicking on overlay
document.getElementById("overlay").addEventListener("click", closeLogoutMenu);
