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
