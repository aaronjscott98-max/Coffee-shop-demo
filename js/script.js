/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Select the elements
    const menuToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    // 2. Safety Check: Only run if both elements exist on the page
    if (menuToggle && navMenu) {
        
        menuToggle.addEventListener('click', (e) => {
            // Prevent any jumpy behaviour
            e.stopPropagation();

            // Toggle classes
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Lock scroll when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // 3. Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });
    }
});