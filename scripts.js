// Preloader functionality
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('mainContent');

  // Fade out preloader
  preloader.style.transition = 'opacity 0.5s ease';
  preloader.style.opacity = '0';

  setTimeout(() => {
    preloader.style.display = 'none';
    mainContent.style.display = 'flex';
  }, 500);
});

// Set dynamic greeting based on time of day
function greet() {
  const now = new Date();
  const hours = now.getHours();
  const greeting = hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening";
  document.getElementById('greeting').textContent = `${greeting}!`;
}

greet(); // Call the greeting function on page load

// Login functionality
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple authentication logic (replace with server-side validation)
  if (username === 'manager' && password === 'manager') {
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    loginMessage.textContent = "Invalid username or password.";
  }
});
