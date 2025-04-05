const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


const navLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.remove('active'); 
    };
});