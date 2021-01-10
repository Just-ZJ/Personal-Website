// JavaScript Document
const navMenu = document.getElementsByClassName("nav-menu");
let currentUnderlineIndex = 0;
navBarOnLoad();

function navBarOnLoad() {
   for (let i = 0; i < navMenu.length; i++) {
      navMenu[i].addEventListener("click", () => {
         setActiveForNavBar(i);
         currentUnderlineIndex = i;
      });
   }

   window.addEventListener(
      "scroll",
      function () {
         amountScrolled();
      },
      false
   );
}

function setActiveForNavBar(i) {
   //remove previous underline class
   navMenu[currentUnderlineIndex].getElementsByTagName("h2")[0].classList.remove("underline");
   //add underline class
   navMenu[i].getElementsByTagName("h2")[0].classList.add("underline");
}

function getDocHeight() {
   return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
   );
}

function amountScrolled() {
   var winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
   var docHeight = getDocHeight();
   var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body).scrollTop;
   var trackLength = docHeight - winHeight;
   var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

   if (pctScrolled >= 0 && pctScrolled <= 33) {
      setActiveForNavBar(0);
      currentUnderlineIndex = 0;
   } else if (pctScrolled <= 66) {
      setActiveForNavBar(1);
      currentUnderlineIndex = 1;
   } else {
      setActiveForNavBar(2);
      currentUnderlineIndex = 2;
   }
}
