// JavaScript Document

/*
 * Create slideshow objects for job & projects
 */
import { SlideShow } from "./SlideShow-Class.js";
const job = new SlideShow("job-exp", "job-description", 2, 2, true);
job.loadInitialDisplay();
const project = new SlideShow("project", "project-description", 2, 1, false);
project.loadInitialDisplay();

/*
 * Add event listeners to side menu
 */
const sideMenu = [
      "menu-language-chart",
      "menu-programming-chart",
      "menu-programs-chart",
      "menu-job",
   ],
   charts = ["language-chart", "programming-chart", "programs-chart"];

for (let i = 0; i < sideMenu.length; i++) {
   if (sideMenu[i] == "menu-job") {
      document.getElementById(sideMenu[i]).addEventListener("click", () => {
         hideAll();
         job.container.classList.remove("hide"); //show job slide
      });
   } else {
      document.getElementById(sideMenu[i]).addEventListener("click", () => {
         hideAll();
         document.getElementById(charts[i]).classList.remove("hide"); //show the respective chart
      });
   }
}

function hideAll() {
   for (let i = 0; i < charts.length; i++) {
      document.getElementById(charts[i]).classList.add("hide");
   }
   job.container.classList.add("hide");
}
