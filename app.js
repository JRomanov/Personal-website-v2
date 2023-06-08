// for mobile burger menu
document.addEventListener('DOMContentLoaded', function () {

const burgerIcon = document.querySelector("#burger");
//const navbarMenu = document.querySelector("#navLinks");
const aboutMe = document.querySelector("#About");
const aboutMeNav = document.querySelector("#aboutMeNavbar")

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("is-active")
});

/* aboutMeNav.addEventListener("click", () => {
    aboutMeNav.scrollIntoView(aboutMe, {behavior:"smooth"})
}); */

});