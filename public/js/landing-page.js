const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

// Weiterleitung (dummy URLs)
signinBtn.addEventListener('click', () => {
    window.location.href = '/signin'; // Sign In Seite
});

signupBtn.addEventListener('click', () => {
    window.location.href = '/signup'; // Sign Up Seite
});
