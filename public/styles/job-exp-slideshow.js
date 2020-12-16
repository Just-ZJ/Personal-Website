// JavaScript Document
import { SlideShow } from "./SlideShow-Class.js";

const job = new SlideShow("job-exp", "job-description");
job.loadInitialDisplay();

const project = new SlideShow("project", "project-description");
project.loadInitialDisplay();

const hidden = document.getElementsByClassName("hide");

//function for clicking each skills
function skillsUnHide(n) {
   hideAll();
   hidden[n].style.display = "block";
}
//function for clicking job experience
function jobUnHide() {
   hideAll();
   jobContainer.style.display = "block";
}
function hideAll() {
   let i;
   for (i = 0; i < 3; i++) {
      hidden[i].style.display = "none";
   }
   jobContainer.style.display = "none";
}
