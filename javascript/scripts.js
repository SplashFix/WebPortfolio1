window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("header-scrolled", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function() {
var navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
        event.preventDefault();
        var targetSectionId = navLink.getAttribute('href');
        var targetSection = document.querySelector(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
});