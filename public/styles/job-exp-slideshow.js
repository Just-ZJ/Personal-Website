// JavaScript Document
/********************************Start of initializing variables to be used********************************/
const jobExpContainer = document.querySelector(".job-exp");
const jobExp = document.getElementsByClassName("job-exp-slide");
const container = document.getElementById("unclickedTemplateFill");
const jobDescription = document.getElementsByClassName("job-descript");

const backButton = document.querySelector(".back");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const dots = document.getElementsByClassName("dot");
const dotsContainer = document.getElementById("dot-container");
const hidden = document.getElementsByClassName("hide");
let currentSlide = 0;
let slideExpanded = false;
//function for clicking each skills
function skillsUnhide(n) {
   hideAll();
   hidden[n].style.display = "block";
}
//function for clicking job experience
function jobUnhide() {
   hideAll();
   jobExpContainer.style.display = "block";
}
function hideAll() {
   let i;
   for (i = 0; i < 3; i++) {
      hidden[i].style.display = "none";
   }
   jobExpContainer.style.display = "none";
}

/********************************End of initializing variables to be used********************************/

loadInitalDisplay();
function loadInitalDisplay() {
   createDots();
   //hides all job experiences except for the first 4
   for (let i = 4; i < jobExp.length; i++) {
      jobExp[i].style.display = "none";
   }
   // onclick events for each of the jobExp
   for (let i = 0; i < container.childElementCount; i++) {
      container.children[i].onclick = function () {
         jobSlideExpand(i);
         createDots();
         setActiveDots(i);
         displayPrevNextButtons(i);
      };
   }
   // eventListeners for the prevButton & nextButton
   prevButton.addEventListener("click", prevSlide);
   nextButton.addEventListener("click", nextSlide);
}

/********************************Start of functions for displaying job experiences********************************/
/**
 * Changes the layout of the slide to 1x1 so that only 1 job experience is shown.
 * Hides the back button.
 * Display the nth job experience and its description.
 *
 * @param n
 *       the index of the job experience that should be displayed
 *
 */
function jobSlideExpand(n) {
   slideExpanded = true;
   //change display of all job experiences to none
   for (let i = 0; i < jobExp.length; i++) {
      jobExp[i].style.display = "none";
   }
   //changes grid layout to 1x1
   changeGridLayout(container, 1);
   //unhide nth job experience
   jobExp[n].style.display = "grid";
   //removes the blurred gray overlay
   jobExp[n].style.pointerEvents = "none";
   //
   jobDescription[n].classList.remove("hide");
   //unhide back button
   backButton.classList.remove("hide");
}

/**
 * Decides whether to show 4 job experiences in 1 slide or 1 job experience in 1 slide.
 *
 * @param {*} start
 *       index of the first job experience that should be shown
 * @param {*} end
 *       index of the last job experience that should be shown (inclusive)
 */
function showSlide(start, end) {
   if (start === end && slideExpanded) {
      jobSlideExpand(start);
   } else if (start <= end) {
      //hides all job experiences
      for (let i = 0; i < jobExp.length; i++) {
         jobExp[i].style.display = "none";
      }
      //shows the next 4 job experiences
      for (let i = start; i <= end; i++) {
         //to ensure that jobExp[i] exists
         if (!(i >= jobExp.length)) {
            jobExp[i].style.display = "grid";
         }
      }
   } else {
      console.log(Error("Start > End"));
   }
}

/**
 * Changes the grid layout(column & row) of elements.
 *
 * @param element
 *      the element whose grid layout needs to be changed.
 * @param num
 *      the number of columns & rows there should be.
 */
function changeGridLayout(element, num) {
   element.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
   element.style.gridTemplateRows = `repeat(${num}, 1fr)`;
}
/********************************End of functions for displaying job experiences********************************/

/********************************Start of functions for back button********************************/
/**
 * Function for the back button.
 * Back button will only be shown when slideExpanded = true.
 * It changes grid layout back to 2x2 so that 4 job experience will be displayed.
 * It also hides the back button, and all job description
 */
function backButtonFunction() {
   slideExpanded = false;
   //hides back button and all job description
   backButton.classList.add("hide");
   for (let i = 0; i < jobDescription.length; i++) {
      jobDescription[i].classList.add("hide");
   }
   for (let i = 0; i < jobExp.length; i++) {
      jobExp[i].style.pointerEvents = "";
   }
   createDots();
   changeGridLayout(container, 2);
   displayPrevNextButtons(currentSlide);
   // to show 4 job experiences in 1 slide
   showSlide(currentSlide, currentSlide + 3);
}
/********************************End of functions for back button********************************/

/********************************Start of functions for previous & next slide buttons********************************/
/**
 * Displays or hides the previous and next buttons accordingly.
 * If it is at the first slide, hide previous button.
 * If it is at the last slide, hide next button.
 * If it is at neither the first/last slide, both buttons whould be shown
 *
 *
 * @param index
 *      For 1x1, index is the page that the user clicks.
 *      For 2x2, index is the currentPage counter.
 */
function displayPrevNextButtons(index) {
   let length = jobExp.length;
   let range;
   /**
    * Since currentSlide is passed into the argument of displayPrevNextButtons in prevSlide & nextSlide & backButtonFunction
    * and currentSlide increases in multiples of 4, numOfFours would be the maximum number of 4s that can be in length.
    * Thus, the slides between range to length would be the last 4.
    */
   let numOfFours = Math.floor(length / 4);
   if (numOfFours >= 1) {
      range = numOfFours * 4;
   }
   if (index === 0) {
      // this is for 2x2 & 1x1 grid display.
      prevButton.classList.add("hide");
      nextButton.classList.remove("hide");
   } else if (index === length - 1 && slideExpanded) {
      // this is for 1x1 grid display.
      prevButton.classList.remove("hide");
      nextButton.classList.add("hide");
   } else if (!slideExpanded && range <= index && index <= length) {
      // range<=index<= length. This is for 2x2 grid display.
      prevButton.classList.remove("hide");
      nextButton.classList.add("hide");
   } else {
      // if index is at neither ends, both buttons should be shown
      prevButton.classList.remove("hide");
      nextButton.classList.remove("hide");
   }
}

/**
 * Function for the previous slide button.
 * It has 2 different behaviors, according to whether or not the slide is clicked by the user
 * Minus 4 to currentSlide each time as 4 job experiences are shown on each slide.
 */
function prevSlide() {
   let start;
   let end;
   if (!slideExpanded) {
      let slideNumEnd;
      if (currentSlide - 4 <= 0) {
         // resets currentSlide to 0 as it is already at the first slide.
         currentSlide = 0;
         slideNumEnd = currentSlide + 3;
      } else {
         currentSlide -= 4;
         slideNumEnd = currentSlide + 3;
      }
      // shows 4 job experiences in 1 slide
      showSlide(currentSlide, slideNumEnd);
      setActiveDots(Math.floor(currentSlide / 4));
      displayPrevNextButtons(currentSlide);
   } else {
      let count;
      // looks for the dot that has class "active", then provide the dotsContainer index of it
      for (let i = 0; i < dotsContainer.childElementCount; i++) {
         if (dotsContainer.childNodes[i].className.includes("active")) {
            // minus 1 to represent the index of the previous job exp that should be shown
            count = i - 1;
            //updates value of currentSlide;
            currentSlide = Math.floor(count / 4) * 4;
         }
      }
      //shows 1 job experience in 1 slide
      showSlide(count, count);
      setActiveDots(count);
      displayPrevNextButtons(count);
   }
}

/**
 * Function for the next slide button.
 * It has 2 different behaviors, according to whether or not the slide is clicked by the user
 * Adds 4 to currentSlide each time as 4 job experiences are shown on each slide.
 */
function nextSlide() {
   if (!slideExpanded) {
      let slideNumEnd;
      if (currentSlide + 7 >= jobExp.length - 1) {
         // currentSlide + 7 to check if it is the last 4.
         // if there are a total of 12 job experiences(last index is 11) and currentSlide = 4, then 4+7>=11.
         currentSlide += 4;
         slideNumEnd = jobExp.length - 1;
      } else {
         currentSlide += 4;
         slideNumEnd = currentSlide + 3;
      }
      // shows 4 job experiences in 1 slide
      showSlide(currentSlide, slideNumEnd);
      setActiveDots(Math.floor(currentSlide / 4));
      displayPrevNextButtons(currentSlide);
   } else {
      let count;
      // looks for the dot that has class "active", then provide the dotsContainer index of it
      for (let i = 0; i < dotsContainer.childElementCount; i++) {
         if (dotsContainer.childNodes[i].className.includes("active")) {
            // added 1 to represent the index of the next job exp that should be shown
            count = i + 1;
            //updates value of currentSlide;
            currentSlide = Math.floor(count / 4) * 4;
         }
      }
      //shows 1 job experience in 1 slide
      showSlide(count, count);
      setActiveDots(count);
      displayPrevNextButtons(count);
   }
}
/********************************End of functions for previous & next slide buttons********************************/

/**********************************************Start of functions for dots**********************************************/
/**
 * Create dots according to the number of job experiences there are.
 * If 2x2, it should be the length of jobExp/4 + 1 (if there is any remainder)
 * If 1x1, it should be the length of jobExp.
 * Adds onclick events to each of the dots to allow user to navigate to the job experience of that particular dot.
 */
function createDots() {
   //for 2x2 grid layout
   let len = jobExp.length;
   // Since each slide has 4 job experiences, any remainder would need an extra dot for the slide.
   if (!slideExpanded) {
      let remainder = len % 4;
      len = Math.floor(len / 4);
      if (remainder != 0) {
         len += 1;
      }
   }
   //clears all the dots each time and create again.
   dotsContainer.innerHTML = "";
   for (let i = 0; i < len; i++) {
      const dotElement = document.createElement("span");
      dotElement.className = "dot";
      dotsContainer.appendChild(dotElement);
   }
   //sets the first dot as active. this is for the inital display
   dotsContainer.children[0].classList.add("active");
   // onclick events for each of the dots
   for (let i = 0; i < dotsContainer.childElementCount; i++) {
      dotsContainer.children[i].onclick = function () {
         if (!slideExpanded) {
            showSlide(i * 4, i * 4 + 3);
         } else {
            jobSlideExpand(i);
         }
         setActiveDots(i);
         displayPrevNextButtons(i * 4);
      };
   }
}
/**
 * Remove the "active" class from all the dots, then add the "active" class to dot[index].
 *
 * @param index
 *      the index at which the dot should be active.
 *
 */
function setActiveDots(index) {
   for (let i = 0; i < dotsContainer.childElementCount; i++) {
      dotsContainer.children[i].classList.remove("active");
   }
   dotsContainer.children[index].classList.add("active");
}
/**********************************************End of functions for dots**********************************************/
