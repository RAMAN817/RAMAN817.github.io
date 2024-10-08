function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    // Toggle the 'open' class
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
}
