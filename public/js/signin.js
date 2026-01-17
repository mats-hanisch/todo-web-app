const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", async () => {
    // get email and password from input fields
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!email || !password) {
        // invalid, some credentials were missing
        alert("Please enter credentials!");
        return;
    }
    
    // send login request to server
    const res = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    
    if (res.ok) {
        // login successful, redirect to /todos
        window.location.href = "/todos";
    }
});
