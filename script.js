const navbarItems = document.querySelectorAll('.js-navbar-item');
const sections = document.querySelectorAll('.section');
const newsletterButton = document.querySelector('.js-button');
const popup = document.querySelector('.newsletter-popup');
const popupExit = popup.querySelector('.newsletter-popup__exit');
const newsletterForm = document.querySelector('.js-form');

let currentSectionIndex = 0;

const sectionContentHide = (index) => {
    sections[index].querySelector('.js-section-content').classList.remove('show');
}

const sectionContentShow = (index) => {
    sections[index].querySelector('.js-section-content').classList.add('show');
}

const newsletterToogleShow = () => {
    popup.classList.toggle('show');
    popup.querySelector('.newsletter-popup__content').classList.toggle('show');
    popupExit.classList.toggle('show');
}

sectionContentShow(0);

navbarItems.forEach((navbarItem, itemIndex) => {
    navbarItem.addEventListener('click', () => {
        sectionContentHide(currentSectionIndex);
        sections[itemIndex].scrollIntoView({behavior: 'smooth'});
        sectionContentShow(itemIndex);
        currentSectionIndex = itemIndex;
    })
})

newsletterButton.addEventListener('click', () => {
    newsletterToogleShow();
})

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('.newsletter-popup__email-input').value = '';
})

popupExit.addEventListener('click', () => {
    newsletterToogleShow();
})

window.addEventListener('load', () => {
    sections[0].scrollIntoView();
})