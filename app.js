document.addEventListener('DOMContentLoaded', function () {

AOS.init();


const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navLinks");
//const aboutMe = document.querySelector("#About");
//const aboutMeNav = document.querySelector("#aboutMeNavbar")

// for mobile burger menu
burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active")
});

/* aboutMeNav.addEventListener("click", () => {
    aboutMeNav.scrollIntoView(aboutMe, {behavior:"smooth"})
}); */

});