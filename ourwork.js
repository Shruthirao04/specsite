const tabHeader = document.querySelector('.tab-header');
const tabHeaderElements = document.querySelectorAll('.tab-header > div');
const tabBody = document.querySelector('.tab-body');
const tabBodyElements = document.querySelectorAll('.tab-content');

tabHeaderElements.forEach((tabElement, index) => {
    tabElement.addEventListener('click', () => {
        tabHeader.querySelector('.active').classList.remove('active');
        tabElement.classList.add('active');
        tabBody.querySelector('.active').classList.remove('active');
        tabBodyElements[index].classList.add('active');
    })
});