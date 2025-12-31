// Mobile Navigation 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// OBSERVE ALL ANIMATED ELEMENTS
document.querySelectorAll('.section, .hero-buttons, .projects-grid').forEach(item => {
    observer.observe(item);
});


// Skills animation
document.querySelectorAll('.skill-progress').forEach(bar => {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
                observer2.unobserve(entry.target);
            }
        });
    });
    observer2.observe(bar);
});

// Project Modal
const modal = document.getElementById('projectModal');
const projects = document.querySelectorAll('.project-card');
const closeBtn = document.querySelector('.close');

projects.forEach(project => {
    project.addEventListener('click', () => {
        const modalId = project.getAttribute('data-modal');
        const modalContent = {
    project1: `
        <h2>Subject Combination Selector</h2>
        <p>Python-based system integrated with SQL to help Class 11 students select suitable subject combinations.</p>
        <ul>
            <li>MySQL database for student profiles and eligibility criteria</li>
            <li>Reduced manual effort in subject selection process</li>
            <li>Improved decision-making for students and teachers</li>
        </ul>
        <div style="margin-top: 1rem;">
            <a href="#" class="btn">GitHub</a>
            <a href="#" class="btn secondary">Live Demo</a>
        </div>
    `,
    project2: `
        <h2>Image Gallery</h2>
        <p>Responsive image gallery showcasing modern frontend development skills with HTML, CSS, JavaScript.</p>
        <ul>
            <li>Grid layout with CSS Flexbox/Grid</li>
            <li>Lightbox modal with smooth transitions</li>
            <li>Fully responsive across all devices</li>
            <li>Image optimization and lazy loading</li>
        </ul>
        <div style="margin-top: 1rem;">
            <a href="#" class="btn">GitHub</a>
            <a href="#" class="btn secondary">Live Demo</a>
        </div>
    `,
    project3: `
        <h2>Calculator App</h2>
        <p>Professional calculator with advanced mathematical operations and modern UI design.</p>
        <ul>
            <li>Basic + advanced operations (sqrt, power, etc.)</li>
            <li>Responsive design with CSS animations</li>
            <li>Error handling and user feedback</li>
            <li>Clean, intuitive interface</li>
        </ul>
        <div style="margin-top: 1rem;">
            <a href="#" class="btn">GitHub</a>
            <a href="#" class="btn secondary">Live Demo</a>
        </div>
    `,
    project4: `
        <h2>Personal Portfolio (This Website!)</h2>
        <p>Interactive resume website built with modern web technologies and smooth animations.</p>
        <ul>
            <li>Responsive design with CSS Grid/Flexbox</li>
            <li>Dark mode toggle with localStorage</li>
            <li>Scroll animations using Intersection Observer</li>
            <li>Interactive timeline and modals</li>
        </ul>
        <div style="margin-top: 1rem;">
            <a href="#" class="btn">View Source</a>
            <a href="#" class="btn secondary">Live Site</a>
        </div>
    `
};

        document.getElementById('modal-body').innerHTML = modalContent[modalId];
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});