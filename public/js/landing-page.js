const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");


signinBtn.addEventListener("click", () => {
    // redirect to /signin
    window.location.href = "/signin";
});

signupBtn.addEventListener("click", () => {
    // redirect to /signup
    window.location.href = "/signup";
});
