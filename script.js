const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar-menu");
const navbarContainer = document.querySelector(".navbar-container");

const mobileNav = () => {
  navbar.classList.toggle("active");
  navbarContainer.classList.toggle("active");
  mobileMenu.classList.toggle("is-active");
};

mobileMenu.addEventListener("click", mobileNav);
