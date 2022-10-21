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

/* form validations */

let userName = document.querySelector("#name");
let nameLabel = document.querySelector("#name-label");
let telephone = document.querySelector("#telephone");
let telephoneLabel = document.querySelector("#telephone-label");
let email = document.querySelector("#email");
let emailLabel = document.querySelector("#email-label");

userName.oninput = () => {
  if (userName.value.length <= 2) {
    nameLabel.setAttribute("style", "color: red");
    nameLabel.innerHTML = "nom * 3 lettres minimum";
  } else {
    nameLabel.setAttribute("style", "color: limegreen");
    nameLabel.innerHTML = "name" + " " + "&#10003";
  }
};

telephone.oninput = () => {
  if (telephone.value.length <= 9) {
    telephoneLabel.setAttribute("style", "color: red");
    telephoneLabel.innerHTML = "telephone * 10 chiffres";
  } else {
    telephoneLabel.setAttribute("style", "color: limegreen");
    telephoneLabel.innerHTML = "telephone" + " " + "&#10003";
  }
};

email.oninput = () => {
  if (email.value.length <= 10) {
    emailLabel.setAttribute("style", "color: red");
    emailLabel.innerHTML = "email * doit avoir @";
  } else {
    emailLabel.setAttribute("style", "color: limegreen");
    emailLabel.innerHTML = "email" + " " + "&#10003";
  }
};
