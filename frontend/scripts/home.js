// Home page functionality

document.addEventListener('DOMContentLoaded', () => {
  // Get welcome message from backend
  fetchWelcomeMessage();
  
  // Add event listener for any buttons or interactive elements
  setupEventListeners();
});

async function fetchWelcomeMessage() {
  try {
    const response = await fetch('http://localhost:8000/home');
    const data = await response.json();
    
    // Display welcome message from the backend
    const welcomeContainer = document.querySelector('.container');
    if (welcomeContainer && data.message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'welcome-message';
      messageElement.innerHTML = `<p class="api-message">${data.message}</p>`;
      welcomeContainer.appendChild(messageElement);
    }
  } catch (error) {
    console.error('Error fetching welcome message:', error);
  }
}

function setupEventListeners() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Add active class to current page link
  navLinks.forEach(link => {
    if (link.getAttribute('href') === location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });
}