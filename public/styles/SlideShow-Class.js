// JavaScript Document

class SlideShow {
   /********************************Start of initializing variables to be used********************************/
   #slideExpanded;
   #currentSlide;

   #container;
   #back;
   #template;
   #previous;
   #next;
   #dotContainer;
   #dots;

   #slides;
   #description;

   constructor(parentContainer, description) {
      this.#slideExpanded = false;
      this.#currentSlide = 0;

      this.#container = document.getElementById(parentContainer);
      this.#back = this.#container.children[0];
      this.#template = this.#container.children[1];
      this.#previous = this.#container.children[2];
      this.#next = this.#container.children[3];
      this.#dotContainer = this.#container.children[4];
      this.#dots = this.#dotContainer.children;

      this.#slides = this.#template.children;
      this.#description = document.getElementsByClassName(description);
   }
   /********************************End of initializing variables to be used********************************/
   /********************************Start of getter & setter function********************************/
   get slideExpanded() {
      return this.#slideExpanded;
   }
   set slideExpanded(boolean) {
      this.#slideExpanded = boolean;
   }

   get currentSlide() {
      return this.#currentSlide;
   }
   set currentSlide(num) {
      this.#currentSlide = num;
   }

   get back() {
      return this.#back;
   }
   get template() {
      return this.#template;
   }
   get previous() {
      return this.#previous;
   }
   get next() {
      return this.#next;
   }
   get dotContainer() {
      return this.#dotContainer;
   }
   get dots() {
      return this.#dots;
   }

   get slides() {
      return this.#slides;
   }
   get description() {
      return this.#description;
   }
   /********************************End of getter & setter function********************************/
   /**
    * Load initial display of slides upon page loading
    * Shows only first 4 slides
    * Add event listeners/onclick events for each slides & backButtons.
    * Creates the dot container and set active as well.
    */
   loadInitialDisplay() {
      this.createDots();
      this.setActiveDots(0);

      /**
       * Hides all slides except for the first 4.
       * Add onclick events for each slides.
       */
      for (let i = 0; i < this.#slides.length; i++) {
         if (i >= 4) {
            this.#slides[i].style.display = "none";
         }
         this.#slides[i].onclick = () => {
            this.jobSlideExpand(i);
            this.createDots();
            this.setActiveDots(i);
         };
      }

      /**
       * Function for the back button.
       * Back button will only be shown when slideExpanded = true.
       * It changes grid layout back to 2x2 so that 4 job experience will be displayed.
       * It also hides the back button, and all job description
       */
      this.#back.addEventListener("click", () => {
         this.#slideExpanded = false;
         //hides back button and all job description
         this.#back.classList.add("hide");
         for (let i = 0; i < this.#description.length; i++) {
            this.#description[i].classList.add("hide");
         }
         for (let i = 0; i < this.#slides.length; i++) {
            this.#slides[i].style.pointerEvents = "";
         }
         let numOfFours = Math.floor(this.#currentSlide / 4);
         this.createDots(); //create dots to reflect 2x2
         this.changeGridLayout(2); //change grid layout from 1x1 to 2x2
         this.showSlide(numOfFours * 4, numOfFours * 4 + 3); //to show slides for 2x2
         this.setActiveDots(numOfFours);
      });

      /**
       * Event listeners for previous & next
       * Decides whether or not to display the previous & next button based on the current slide.
       * If 1st slide, hide previous.
       * If last slide, hide next.
       */
      this.#previous.addEventListener("click", () => {
         if (!this.#slideExpanded) {
            /*
             * For 2x2
             */
            let slideNumEnd;
            if (this.#currentSlide - 4 <= 0) {
               this.#currentSlide = 0; //resets currentSlide to 0 as it is already at the first slide.
               slideNumEnd = this.#currentSlide + 3;
            } else {
               this.#currentSlide -= 4;
               slideNumEnd = this.#currentSlide + 3;
            }
            this.showSlide(this.#currentSlide, slideNumEnd);
            this.setActiveDots(Math.floor(this.#currentSlide / 4));
         } else {
            let count;
            /*
             * For 1x1
             * It looks for the dot that has class "active", then provide the index of it in dotContainer
             */
            for (let i = 0; i < this.#dotContainer.childElementCount; i++) {
               if (this.#dotContainer.childNodes[i].className.includes("active")) {
                  count = i - 1; //minus 1 to represent the index of the previous job exp that should be shown
                  this.#currentSlide = Math.floor(count / 4) * 4; //updates value of currentSlide;
               }
            }
            this.showSlide(count, count);
            this.setActiveDots(count);
         }
      });
      this.#next.addEventListener("click", () => {
         if (!this.#slideExpanded) {
            /*
             * For 2x2
             */
            let slideNumEnd;
            if (this.#currentSlide + 7 >= this.#slides.length - 1) {
               /*
                * currentSlide + 7 to check if it is the last 4.
                * if there are a total of 12 job experiences(last index is 11) and currentSlide = 4, then 4+7>=11.
                */
               this.#currentSlide += 4;
               slideNumEnd = this.#slides.length - 1;
            } else {
               this.#currentSlide += 4;
               slideNumEnd = this.#currentSlide + 3;
            }
            this.showSlide(this.#currentSlide, slideNumEnd);
            this.setActiveDots(Math.floor(this.#currentSlide / 4));
         } else {
            /*
             * For 1x1
             * It looks for the dot that has class "active", then provide the index of it in dotContainer
             */
            let count;
            for (let i = 0; i < this.#dotContainer.childElementCount; i++) {
               if (this.#dotContainer.childNodes[i].className.includes("active")) {
                  count = i + 1; // added 1 to represent the index of the next job exp that should be shown
                  this.#currentSlide = Math.floor(count / 4) * 4; //updates value of currentSlide;
               }
            }
            this.showSlide(count, count);
            this.setActiveDots(count);
         }
      });
   }
   /********************************Start of functions for displaying slides********************************/
   /**
    * Changes the layout of the slide to 1x1 so that only 1 job experience is shown.
    * Hides the back button.
    * Display the nth job experience and its description.
    *
    * @param n
    *       the index of the job experience that should be displayed
    *
    */
   jobSlideExpand(n) {
      this.#slideExpanded = true;
      //change display of all job experiences to none
      for (let i = 0; i < this.#slides.length; i++) {
         this.#slides[i].style.display = "none";
      }
      this.changeGridLayout(1); //changes grid layout to 1x1
      this.#slides[n].style.display = "grid"; //un-hide nth job experience
      this.#slides[n].style.pointerEvents = "none"; //removes the blurred gray overlay
      this.#description[n].classList.remove("hide"); //un-hide description
      this.#back.classList.remove("hide"); //un-hide back button
      this.displayPrevNextButtons(n);
   }
   /**
    * Decides whether to show 4 job experiences in 1 slide or 1 job experience in 1 slide.
    *
    * @param {*} start
    *       index of the first job experience that should be shown
    * @param {*} end
    *       index of the last job experience that should be shown (inclusive)
    */
   showSlide(start, end) {
      if (start === end && this.#slideExpanded) {
         this.jobSlideExpand(start);
      } else if (start <= end) {
         //hides all job experiences
         for (let i = 0; i < this.#slides.length; i++) {
            this.#slides[i].style.display = "none";
         }
         //shows the next 4 job experiences
         for (let i = start; i <= end; i++) {
            //to ensure that job[i] exists
            if (i < this.#slides.length) {
               this.#slides[i].style.display = "grid";
            }
         }
         this.displayPrevNextButtons(start);
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
   changeGridLayout(num) {
      this.#template.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
      this.#template.style.gridTemplateRows = `repeat(${num}, 1fr)`;
   }
   /********************************End of functions for displaying slides********************************/
   /********************************Start of functions to decide previous & next slide buttons********************************/
   /**
    * Displays or hides the previous and next buttons accordingly.
    * If it is at the first slide, hide previous button.
    * If it is at the last slide, hide next button.
    * If it is at neither the first/last slide, both buttons would be shown
    *
    *
    * @param index
    *      For 1x1, index is the page that the user clicks.
    *      For 2x2, index is the currentPage counter.
    */
   displayPrevNextButtons(index) {
      let slideLength = this.#slides.length,
         slideExpanded = this.#slideExpanded,
         range,
         numOfFours = Math.floor(slideLength / 4);
      if (numOfFours >= 1) {
         range = numOfFours * 4;
      }
      /**
       * Since currentSlide is passed into the argument of displayPrevNextButtons in prevSlide & nextSlide & backButtonFunction
       * and currentSlide increases in multiples of 4, numOfFours would be the maximum number of 4s that can be in length.
       * Thus, the slides between range to length would be the last 4.
       */
      if (index == 0) {
         //for first slide in 2x2 & 1x1.
         this.#previous.classList.add("non-visible");
         this.#next.classList.remove("non-visible");
      } else if (
         (slideExpanded && index == slideLength - 1) ||
         (slideExpanded && range <= index && index <= slideLength)
      ) {
         //for last slide in 1x1 & 2x2
         this.#previous.classList.remove("non-visible");
         this.#next.classList.add("non-visible");
      } else {
         // if index is at neither ends, both buttons should be shown
         this.#previous.classList.remove("non-visible");
         this.#next.classList.remove("non-visible");
      }
   }
   /********************************End of functions to decide previous & next slide buttons********************************/
   /**********************************************Start of functions for dots**********************************************/
   /**
    * Create dots according to the number of job there are.
    * If 2x2, it should be the length of job/4 + 1 (if there is any remainder)
    * If 1x1, it should be the length of job.
    * Adds onclick events to each of the dots to allow user to navigate to the job experience of that particular dot.
    *
    */
   createDots() {
      let slidesLength = this.#slides.length,
         slideExpanded = this.#slideExpanded; //for 1x1
      /*
       * This conditional statement is for 2x2.
       * Since each slide has 4 job experiences, any remainder would need an extra dot for the slide.
       */
      if (!slideExpanded) {
         let remainder = slidesLength % 4;
         slidesLength = Math.floor(slidesLength / 4);
         if (remainder > 0) {
            slidesLength += 1;
         }
      }
      //clears all the dots each time and create again.
      this.#dotContainer.innerHTML = "";
      for (let i = 0; i < slidesLength; i++) {
         const dotElement = document.createElement("span");
         dotElement.className = "dot";
         this.#dotContainer.appendChild(dotElement);
      }
      // onclick events for each of the dots
      for (let i = 0; i < this.#dotContainer.childElementCount; i++) {
         this.#dotContainer.children[i].onclick = () => {
            if (!slideExpanded) {
               this.showSlide(i * 4, i * 4 + 3); //show 2x2 slides
            } else {
               this.jobSlideExpand(i); //show 1x1 slides
            }
            this.setActiveDots(i);
         };
      }
   }
   /**
    * Remove the "active" class from all the dots, then add the "active" class to dot[index].
    *
    * @param index
    *      the index at which the dot should be active.
    */
   setActiveDots(index) {
      for (let i = 0; i < this.#dotContainer.childElementCount; i++) {
         this.#dotContainer.children[i].classList.remove("active");
      }
      this.#dotContainer.children[index].classList.add("active");
      this.#currentSlide = index;
   }
   /**********************************************End of functions for dots**********************************************/
}
export { SlideShow };
