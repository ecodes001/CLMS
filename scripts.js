// Preloader functionality
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('mainContent');
  const logo = document.querySelector('.logo img');

  // Keep the preloader visible for 8 seconds before fading out
  setTimeout(() => {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';

    setTimeout(() => {
      preloader.style.display = 'none';
      mainContent.style.display = 'flex';
      // Start rotating the logo
      logo.style.animation = 'rotateY 10s linear infinite';
    }, 500); // Wait for fade-out to complete
  }, 8000); // Keep preloader visible for 8 seconds
});

// Preloader background music
const audio = new Audio('your-music-file.mp3'); // Replace with your actual music file
audio.loop = true;
audio.volume = 0.5; // Adjust volume as needed

window.addEventListener('load', () => {
  audio.play().catch(error => console.log("Autoplay blocked: ", error));
});
// Function to create floating emojis (music notes & wine glasses)
function createFloatingEmoji() {
  const emojis = ["🎵", "🎶", "🍷", "🥂"];
  const emoji = document.createElement("div");
  emoji.classList.add("lounge-emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Random positioning and animation delay
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 3 + 3 + "s";
  
  document.getElementById("floating-emojis").appendChild(emoji);

  // Remove emoji after animation ends
  setTimeout(() => {
    emoji.remove();
  }, 8000);
}

// Generate multiple emojis at intervals
setInterval(createFloatingEmoji, 800);

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
