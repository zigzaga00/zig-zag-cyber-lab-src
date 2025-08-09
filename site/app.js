// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
// close navbar
const closeNavBar = () => navbar.classList.remove("showNav");

// all links in navbar
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", closeNavBar);
});
