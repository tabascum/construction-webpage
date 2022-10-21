/* dropdown menu behaviour */

const servicesBtn = document.querySelector(".nav-dropbtn");
const services = document.querySelector(".nav-dropdown-content");

servicesBtn.onclick = () => {
  services.classList.toggle("active");
};

/* dropdown on small screens */

const toggle = document.querySelector(".nav-toggle-button");
const navbarLinks = document.querySelector(".nav-links");

toggle.onclick = () => {
  navbarLinks.classList.toggle("active");
};
