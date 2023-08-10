const accordionTitles = document.querySelectorAll('.accordion__title');
const accordionContents = document.querySelectorAll('.accordion__content');

accordionTitles.forEach((title, index) => {
    title.addEventListener('click', function() {
        const content = accordionContents[index];

        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
