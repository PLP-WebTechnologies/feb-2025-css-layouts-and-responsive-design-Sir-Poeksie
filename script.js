document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        
        alert("Registration successful!");
        form.reset();
    });

    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
