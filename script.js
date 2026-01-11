// Scroll animation (already working)
const animatedItems = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

animatedItems.forEach(item => observer.observe(item));

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click + active highlight
navLinks.forEach(link => {
    link.addEventListener('click', () => {

        // remove active from all
        navLinks.forEach(l => l.classList.remove('active'));

        // add active to clicked
        link.classList.add('active');

        // close menu (mobile)
        navMenu.classList.remove('active');
    });
});
