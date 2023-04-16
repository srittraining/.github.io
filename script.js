//RESPONSIVE NAVBAR
const menuButton = document.getElementsByClassName("btn__menu")[0];
const navbarLinks = document.getElementsByClassName("navbar__links")[0];

menuButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


