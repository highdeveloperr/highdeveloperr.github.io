const validCredentials = {
    admin: { password: 'admin123', redirect: 'protected' },
    user1: { password: 'user123', redirect: 'user1.html' },
    user2: { password: 'user123', redirect: 'user2.html' },
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (validCredentials[username] && validCredentials[username].password === password) {
        message.textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = validCredentials[username].redirect;
        }, 2000);
    } else {
        message.textContent = 'Invalid username or password.';
    }
});
