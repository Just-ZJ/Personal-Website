const navbar = document.getElementById("bar-menu-container");
const navMenuContainer = document.getElementById("nav-menu-container");
const navigation = document.getElementsByTagName("nav")[0];

navigation.addEventListener("mouseenter", showNav);
function showNav() {
   /*3 bar menu animation*/
   navbar.style.transform = "rotate(-90deg)";
   navbar.style.transformOrigin = "center";
   navbar.style.transitionDuration = "0.5s";
   /*navigation menu pops out and displays the various page title*/
   navMenuContainer.style.display = "block";
   /*expansion of circle background*/
   navigation.style.width = "46.5%";
   navigation.style.transitionDuration = "0.75s";

   navigation.addEventListener("mouseleave", function hideNav() {
      /*returns 3 bar menu to normal*/
      navbar.style.transform = "rotate(0deg)";
      navbar.style.transformOrigin = "center";
      navbar.style.transitionDuration = "0.5s";
      /*returns navigation menu to normal*/ navigation.style.width = "50px";
      navMenuContainer.style.display = "none";
   });
}

const dlIconContainer = document.getElementById("download-icon-container");
dlIconContainer.addEventListener("mouseenter", doEffects);
function doEffects() {
   const dlIcon = document.getElementById("download-icon");
   const dlIconHover = document.getElementById("download-icon-hover");
   dlIcon.style.display = "none";
   dlIconHover.style.display = "inline-block";
   dlIconContainer.addEventListener("mouseleave", function closeEffects() {
      dlIcon.style.display = "inline-block";
      dlIconHover.style.display = "none";
   });
}
