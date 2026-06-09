document.addEventListener("DOMContentLoaded", () => {

    const BASE_URL = "https://event-management-system-2-ac20.onrender.com";

    window.registerUser = async function () {

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!username || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (data.success) {
                alert("Registered successfully!");
                window.location.href = "index.html";
            } else {
                alert(data.message || "Registration failed");
            }

        } catch (error) {
            console.error("Register error:", error);
            alert("Failed to connect to server");
        }
    };

    // ======================
    // LOGIN
    // ======================
    window.validateLogin = async function () {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();

            if (data.success) {
                window.location.href = "Homepage.html";
            } else {
                alert(data.message || "Invalid credentials");
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("Failed to connect to server");
        }
    };

});
