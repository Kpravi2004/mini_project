document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordMessage = document.getElementById("passwordMessage");
    const submitButton = document.getElementById("submitButton");

    // Live Password Match Check
    confirmPassword.addEventListener("input", function () {
        if (password.value === confirmPassword.value) {
            passwordMessage.textContent = "✅ Passwords Match";
            passwordMessage.style.color = "green";
        } else {
            passwordMessage.textContent = "❌ Passwords Do Not Match";
            passwordMessage.style.color = "red";
        }
    });

    // Form Submit Event
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            return;
        }

        // Mobile Number Validation (10 Digits)
        const mobile = document.getElementById("mobile").value;
        if (!/^\d{10}$/.test(mobile)) {
            alert("Enter a valid 10-digit mobile number!");
            return;
        }

        // Email Validation
        const email = document.getElementById("email").value;
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Enter a valid email address!");
            return;
        }

        // Button Animation
        submitButton.textContent = "Processing...";
        submitButton.disabled = true;
        submitButton.style.background = "#aaa";

        setTimeout(() => {
            alert("Registration Successful!");
            form.reset();
            submitButton.textContent = "Sign Up";
            submitButton.disabled = false;
            submitButton.style.background = "linear-gradient(135deg, #ff416c, #ff4b2b)";
        }, 2000);
    });
});
