// Sticky Navbar with Color Change on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // Scrolled down - solid background
        navbar.querySelector('div').classList.remove('bg-white/30');
        navbar.querySelector('div').classList.add('bg-gray-900/95');
    } else {
        // Top of page - glassmorphism
        navbar.querySelector('div').classList.remove('bg-gray-900/95');
        navbar.querySelector('div').classList.add('bg-white/30');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});