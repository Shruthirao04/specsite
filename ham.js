document.addEventListener('DOMContentLoaded', function () {
    const ham = document.querySelector(".header__nav-toggle");
    const navMenu = document.querySelector(".header__nav-menu");
    const accordPlus = document.querySelector(".nav-accordion");

    accordPlus.addEventListener('click', function () {

        const accordNew = this.nextElementSibling;
        if (accordNew.style.display === "block") {
            accordNew.style.display = "none";
        }
        else {
            accordNew.style.display = "block";
        }
    })

    ham.addEventListener("click", function() {
        ham.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

});