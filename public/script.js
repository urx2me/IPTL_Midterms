const API_URL = 'http://localhost:5000'
// Function to handle login
async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' }, 
        body: JSON.stringify({ email, password })
    });
   
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
        alert('Login successful');
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert(data.message);
    }
    
}

// Function to handle signup
async function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' }, 
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
    if (response.ok) {
        window.location.href="index.html"; // Redirect to login
    }
}

// Function to check authentication on the dashboard 
function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Unauthorized! Please log in.');
        window.location.href="index.html";
    } else {
        document.getElementById('user-email').textContent = "Logged in as: "+ localStorage.getItem('email');
    }
}
    // Function to handle logout
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    alert('Logged out');
    window.location.href="index.html";
}