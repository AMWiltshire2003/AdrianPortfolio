// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Neon hover animation for project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px) scale(1.02)';
    card.style.boxShadow = '0 0 20px rgba(0,255,170,0.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px) scale(1)';
    card.style.boxShadow = '0 0 12px rgba(0,255,170,0.2)';
  });
});

// Mobile navbar toggle (optional if you add a mobile menu)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
