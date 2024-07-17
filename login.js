document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define the correct username and password
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('protectedContent').style.display = 'block';
    } else {
        document.getElementById('errorMessage').textContent = 'Incorrect username or password';
    }
});
