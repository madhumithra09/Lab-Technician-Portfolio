document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const fadeInElements = document.querySelectorAll('.fade-in');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    fadeInElements.forEach(el => observer.observe(el));

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const contactForm = document.getElementById('main-contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks! This demo does not send emails. Replace with your form handler.');
        contactForm.reset();
    });

    window.addEventListener('scroll', handleScroll);
    document.getElementById('year').textContent = new Date().getFullYear();
});