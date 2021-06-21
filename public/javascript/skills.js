// JavaScript Document

//to activate Bootstrap Tooltip
$('[data-toggle="tooltip"]').tooltip();

//to position the white circle at the end of the progress bar
function setWidth() {
   //% of width
   const progressBar = document.getElementsByClassName("progress-bar");
   //to set container width for dot to land on end of progress bar
   const dotWidthContainer = document.getElementsByClassName("progress-bar-container");
   // width of outer container to calculate width
   const progressBarDimension = document.getElementsByClassName("progress-bar-dimension");
   // width of white circle
   const circleWidth = document.getElementsByClassName("circle")[0].offsetWidth;

   for (let i = 0; i < progressBar.length; i++) {
      let widthInPercent = parseInt(progressBar[i].style.width) / 100;
      let boundingWidth = progressBarDimension[i].offsetWidth;
      let expectedWidth = Math.ceil(boundingWidth * widthInPercent + circleWidth / 2);
      dotWidthContainer[i].style.width = `${expectedWidth}px`;
   }
}
setWidth();

function showJobExperience(slideNo) {
   const jobCards = document.getElementsByClassName("carousel-item");
   const indicators = document.querySelectorAll(".carousel-indicators li");
   jobCards.forEach((element) => {
      element.classList.remove("active");
   });
   indicators.forEach((element) => {
      element.classList.remove("active");
   });
   jobCards[slideNo].classList.add("active");
   indicators[slideNo].classList.add("active");
}
