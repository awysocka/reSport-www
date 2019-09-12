// // ---HAMBURGER MENU---

const hamburgerIcon = document.getElementById("hamburger");
const nav = document.getElementById('nav');
const navLinks = document.getElementsByClassName("nav__item");

// open and close menu after 'click' on hamburger
hamburgerIcon.onclick = function() {
  hamburgerIcon.classList.toggle("hamburger--active");
  nav.classList.toggle("nav--active");
};

// close rwd menu after 'click' link
const closeMenu = function() {
  hamburgerIcon.classList.remove("hamburger--active");
  nav.classList.remove("nav--active");
};

for(let navLink of navLinks) {
    navLink.onclick = closeMenu;
}


// ---POPUPS---

const moreAnna = document.getElementById("link-more-anna");
const moreRadoslaw = document.getElementById("link-more-radoslaw");
const popupAnna = document.getElementById("popup-anna");
const popupRadoslaw = document.getElementById("popup-radoslaw");
const popupCloses = document.getElementsByClassName("popup__close");
const popups = document.getElementsByClassName("popup");
const popupBoxes = document.getElementsByClassName("popup__box");
const deactivatePopup = function(event) {
  document.getElementsByClassName("popup--active")[0].classList.remove("popup--active");
  event.preventDefault();
};

// open popups

moreAnna.onclick = function(event) {
  popupAnna.classList.add("popup--active");
  event.preventDefault();
};

moreRadoslaw.onclick = function(event) {
  popupRadoslaw.classList.add("popup--active");
  event.preventDefault();
};

// close popup: on x

for(let popupClose of popupCloses) {
  popupClose.onclick = deactivatePopup;
}

// close popup: on outside click

for(let popup of popups) {
  popup.onclick = deactivatePopup;
}

// prevent close popup on popup content click

for(let popupBox of popupBoxes) {
  popupBox.onclick = function(event) {
    event.stopPropagation();
  };
}

// NAV
// Changing nav-bar color after scrolling

window.onscroll = function() {
  const scrolled = window.scrollY;

  if(scrolled >= 70) {
    nav.classList.add("nav--colored");
  } else {
    nav.classList.remove("nav--colored");
  }
};
