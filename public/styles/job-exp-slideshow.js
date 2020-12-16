// JavaScript Document
import { SlideShow } from "./SlideShow-Class.js";

const job = new SlideShow("job-exp", "job-description");
job.loadInitialDisplay();

const project = new SlideShow("project", "project-description");
project.loadInitialDisplay();

const hidden = document.getElementsByClassName("hide");

document.getElementById("language-chart").addEventListener("click", () => {
   hideAll();
   hidden[0].style.display = "block";
});

document.getElementById("programming-chart").addEventListener("click", () => {
   hideAll();
   hidden[1].style.display = "block";
});

document.getElementById("programs-chart").addEventListener("click", () => {
   hideAll();
   hidden[2].style.display = "block";
});

document.getElementById("job-side-menu").addEventListener("click", () => {
   hideAll();
   job.container.style.display = "block";
});

function hideAll() {
   let i;
   for (i = 0; i < 3; i++) {
      hidden[i].style.display = "none";
   }
   job.container.style.display = "none";
}
