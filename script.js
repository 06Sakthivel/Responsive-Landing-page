const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar-menu");
const navbarContainer = document.querySelector(".navbar-container");

const mobileNav = () => {
  navbar.classList.toggle("active");
  navbarContainer.classList.toggle("active");
  mobileMenu.classList.toggle("is-active");
};

mobileMenu.addEventListener("click", mobileNav);

const hideMobileMenu = () => {
  const menu = document.querySelector(".is-active");
  console.log("hidee");
  if (window.innerWidth <= 980 && menu) {
    menu.classList.toggle("is-active");
    mobileMenu.classList.remove("active");
    navbarContainer.classList.remove("active");
  }
};

document
  .querySelector(".navbar-links")
  .addEventListener("click", hideMobileMenu);
