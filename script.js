const navbarItems = document.querySelectorAll('.js-navbar-item');
const sections = document.querySelectorAll('.section');

let currentSectionIndex = 0;

const contentHide = (index) => {
    sections[index].querySelector('.js-section-content').classList.remove('show');
}

const contentShow = (index) => {
    sections[index].querySelector('.js-section-content').classList.add('show');
}

contentShow(0);

navbarItems.forEach((navbarItem, itemIndex) => {
    navbarItem.addEventListener('click', () => {
        contentHide(currentSectionIndex);
        sections[itemIndex].scrollIntoView({behavior: 'smooth'});
        contentShow(itemIndex);
        currentSectionIndex = itemIndex;
    })
})

window.addEventListener('load', () => {
    sections[0].scrollIntoView();
})