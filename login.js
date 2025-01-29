function validateLogin() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    if ((username.value === "user" && password.value === "password") || 
        (username.value === "admin#1234" && password.value === "admin#1234")) {
        // Set login status in session storage
        sessionStorage.setItem("isLoggedIn", "true");

        // Display success message
        errorMessage.style.display = "none"; 
        successMessage.style.display = "block";
        successMessage.textContent = "Login succeeded!";

        // Redirect to the main page after a delay
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else {
        // Display error message
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.textContent = "Incorrect username or password.";
        username.classList.add("error-background");
        password.classList.add("error-background");
    }
}

function toggleLogoutMenu() {
    const logoutMenu = document.getElementById("logoutMenu");
    logoutMenu.style.display = logoutMenu.style.display === "block" ? "none" : "block";
}

function logout() {
    // Remove login status
    sessionStorage.removeItem("isLoggedIn");
    // Redirect to login page
    window.location.href = "login.html";
}


document.getElementById('username').addEventListener('input', function() {
    this.classList.remove("error-background");
    document.getElementById('error-message').style.display = "none";
});

document.getElementById('password').addEventListener('input', function() {
    this.classList.remove("error-background");
    document.getElementById('error-message').style.display = "none";
});
