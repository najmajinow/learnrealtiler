// Smooth Scrolling Effect
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Modal
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close modal when clicking on close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate sending message
    modal.style.display = 'flex';
    contactForm.reset();
});

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
}

// Smooth scroll to section when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Close menu after clicking a link on mobile
        const navbar = document.getElementById('navbar');
        if (window.innerWidth <= 600) {
            navbar.style.display = 'none';
        }
    });
});
// Select the About Us section
const aboutSection = document.querySelector('.about');

// Function to change background color on hover
aboutSection.addEventListener('mouseenter', () => {
    aboutSection.style.backgroundColor = '#ffd54f'; // Change to a warm yellow on hover
    aboutSection.style.color = '#000'; // Darker text for contrast
});

aboutSection.addEventListener('mouseleave', () => {
    aboutSection.style.backgroundColor = '#e0f7fa'; // Revert to original color
    aboutSection.style.color = '#333';
});

// Function to change color when section is in view on scroll
window.addEventListener('scroll', () => {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // If the section is within the viewport
    if (sectionPosition < screenPosition) {
        aboutSection.style.backgroundColor = '#b2ebf2'; // Light blue color when in view
        aboutSection.style.color = '#333';
    } else {
        aboutSection.style.backgroundColor = '#e0f7fa'; // Revert to initial color when out of view
        aboutSection.style.color = '#333';
    }
});

