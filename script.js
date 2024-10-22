const validCredentials = {
    username: 'BETA123',
    password: 'allowedentry'
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === validCredentials.username && password === validCredentials.password) {
        message.textContent = 'Login successful! Redirecting...';
        message.style.color = 'green';
        // Redirect to a protected page
        setTimeout(() => {
            window.location.href = 'protected.html'; // Change this to your protected page
        }, 2000);
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
});
