document.addEventListener('DOMContentLoaded', (event) => {
    if (getCookie('loggedIn') === 'true') {
        showProtectedContent();
    } else {
        showLoginForm();
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Define the correct username and password
        const correctUsername = 'H3D';
        const correctPassword = 'Hydrogenius';

        if (username === correctUsername && password === correctPassword) {
            setCookie('loggedIn', 'true', 30);
            showProtectedContent();
        } else {
            document.getElementById('errorMessage').textContent = 'Incorrect username or password';
        }
    });
});

function showProtectedContent() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('protectedContent').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('protectedContent').style.display = 'none';
}

function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
