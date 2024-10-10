// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the default anchor click behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Enables smooth scrolling
        });
    });
});

// Toggle menu functionality
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggles the 'active' class to show/hide the menu
});