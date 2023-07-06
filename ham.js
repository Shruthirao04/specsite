// function ham(element) {
//     var hamMenu = document.getElementById("hamMenu");
//     hamMenu.classList.toggle("menu");
//     element.classList.toggle("lines");
// }
document.addEventListener('DOMContentLoaded', function () {
    // Select the toggle button and menu element
    var toggleButton = document.querySelector('.ham__nav-toggle');
    var navMenu = document.getElementById('navMenu');

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        var body = document.body;

        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            body.classList.remove('no-scroll');
            toggleButton.classList.remove('open');
        } else {
            navMenu.classList.add('active');
            body.classList.add('no-scroll');
            toggleButton.classList.add('open');
        }
    });
});