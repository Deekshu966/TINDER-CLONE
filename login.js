function performLogin() {
    // Add your login logic here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Simple username and password check
    if (username === 'user' && password === 'password') {
        // Redirect to the card swiper page on successful login
        window.location.href = 'swiper.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// signup.js
