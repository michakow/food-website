const navbarItems = document.querySelectorAll('.js-navbar-item');
const sections = document.querySelectorAll('.section');

const contentHide = (index) => {
    sections[index].querySelector('.js-section-content').classList.remove('show');
}

const contentShow = (index) => {
    sections[index].querySelector('.js-section-content').classList.add('show');
}

contentShow(0);

navbarItems.forEach((navbarItem, itemIndex) => {
    navbarItem.addEventListener('click', () => {
        if(itemIndex === 0) contentShow(0);
        else contentHide(0);
        sections[itemIndex].scrollIntoView({behavior: 'smooth'});
    })
})