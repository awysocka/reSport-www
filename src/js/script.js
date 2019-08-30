// ---HAMBURGER MENU---

const hamburgerIcon = document.getElementById("hamburger_menu");
const navList = document.getElementById('list');
const navLinks = document.getElementsByClassName("list_link");

// open and close menu after 'click' on hamburger
hamburgerIcon.onclick = function() {
  hamburgerIcon.classList.toggle("hamburger_menu--active");
  navList.classList.toggle("list--open");
};

// close rwd menu after 'click' link
const closeMenu = function() {
  hamburgerIcon.classList.remove("hamburger_menu--active");
  navList.classList.remove("list--open");
};

for(let list_link of navLinks) {
    list_link.onclick = closeMenu;
}
