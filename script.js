const navbarItems = document.querySelectorAll('.js-navbar-item');
const sections = document.querySelectorAll('.section');

navbarItems.forEach((navbarItem, itemIndex) => {
    navbarItem.addEventListener('click', () => {
        sections[itemIndex].scrollIntoView({behavior: 'smooth'});
    })
})