// for mobile burger menu
document.addEventListener('DOMContentLoaded', function () {

AOS.init();

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navLinks");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
});

});