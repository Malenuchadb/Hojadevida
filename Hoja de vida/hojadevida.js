document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOnScroll = () => {
        const windowBottom = window.scrollY + window.innerHeight;

        fadeElements.forEach(el => {
            const elementTop = el.offsetTop;
            if (windowBottom > elementTop + 100) {
                el.classList.add('appear');
            }
        });
    };

    window.addEventListener('scroll', appearOnScroll);
    appearOnScroll(); 
});