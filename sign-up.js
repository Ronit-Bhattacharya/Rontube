document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = {
            username,
            email,
            password
        };

        localStorage.setItem(username, JSON.stringify(user));
        alert('Account created successfully! You can now log in.');

        // Redirecting to the login page
        window.location.href = 'login.html';
    });
});
