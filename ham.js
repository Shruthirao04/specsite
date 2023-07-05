const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-menu");
const hamMenuSubMenu = document.querySelector(".ham-menu__sub-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    hamMenu.classList.toggle("active");
});

document.querySelectorAll(".ham-link").forEach(function(n) {
    n.addEventListener("click", function() {
        hamburger.classList.remove("active");
        hamMenu.classList.remove("active");
    });
});