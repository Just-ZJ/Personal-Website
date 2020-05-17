const navbar = document.getElementById("bar-menu-container");
const navMenuContainer = document.getElementById("nav-menu-container");
const navigation = document.getElementById("navigation");

navbar.addEventListener("mouseenter", hideNav);
navigation.addEventListener("mouseenter", hideNav);

function hideNav() {
   navMenuContainer.style.display = "block";

   navigation.style.width = "45%";
   navigation.style.transitionDuration = "0.75s";
   navigation.addEventListener("mouseleave", showNav);
}

function showNav() {
   navigation.style.width = "50px";
   navMenuContainer.style.display = "none";
}
