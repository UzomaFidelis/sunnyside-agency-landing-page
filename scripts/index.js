const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const hamburgerBtnFill = document.getElementById("hamburger-btn-fill");

function showNav() {
  navMenu.style.visibility = "visible";
  hamburgerBtnFill.style.fill = "#888";
}
function hideNav() {
  navMenu.style.visibility = "hidden";
  hamburgerBtnFill.style.fill = "#FFF";
}

function toggleMenu() {
  if (
    window.getComputedStyle(navMenu).getPropertyValue("visibility") == "hidden"
  ) {
    showNav();
  } else {
    hideNav();
  }
}
function navShowOnLg() {
  if (
    window.matchMedia("(min-width: 768px)").matches &&
    navMenu.style.visibility == "hidden"
  ) {
    showNav();
  } else if (
    !window.matchMedia("(min-width: 768px)").matches &&
    navMenu.style.visibility == "visible"
  ) {
    hideNav();
  }
}

function closeNavOnOutsideClick(e) {
  if (
    window.getComputedStyle(navMenu).getPropertyValue("visibility") ==
      "visible" &&
    !hamburgerBtn.contains(e.target) &&
    !navMenu.contains(e.target)
  ) {
    console.log("hiding navbar");
    hideNav();
  }
}

hamburgerBtn.onclick = toggleMenu;
document.onmousedown = closeNavOnOutsideClick;
window.onresize = navShowOnLg;
