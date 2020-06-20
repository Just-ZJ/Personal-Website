// JavaScript Document

const jobExp = document.querySelector(".job-exp");
const jobSlides = document.getElementsByClassName("job-exp-slide");
const hidden = document.getElementsByClassName("hide");
const container = document.querySelector(".slideshow-container");
const jobDescript = document.getElementsByClassName("job-descript");
const back = document.querySelector(".back");
const dots = document.getElementsByClassName("dot");

//hides all slides but the first 4
let i;
for(i = 4; i < jobSlides.length; i++){
	jobSlides[i].style.display = "none";
}

//function for clicking each skills
function skillsUnhide(n){
	hideAll();
	hidden[n].style.display = "block";
}
//function for clicking job experience
function jobUnhide(){
	hideAll();
	jobExp.style.display = "block";
}
function hideAll(){
	let i;
	for(i = 0; i < 3; i++){
		hidden[i].style.display = "none";
	}
	jobExp.style.display = "none";
}

//function of back button
function jobSlideDecrease(){ 
	container.style.gridTemplateColumns = "repeat(2, 1fr)";
	container.style.gridTemplateRows = "repeat(2, 1fr)";
	back.classList.add("hide");
	let i;
	if(currSlide <= 3){
		for(i = 0; i < 4; i++){
			jobSlides[i].style.display = "grid";
			jobSlides[i].style.pointerEvents = "auto";
		}
	}else if(currSlide > 3){
		for(i = 4; i < jobSlides.length; i++){
			jobSlides[i].style.display = "grid";
			jobSlides[i].style.pointerEvents = "auto";
		}
	}
	for(i = 0; i < jobDescript.length; i++){
		jobDescript[i].classList.add("hide");
	}
}
//function for clicking slide
function jobSlideExpand(n){
	jobSlideDecrease();
	let i;
	for(i = 0; i < jobSlides.length; i++){
		jobSlides[i].style.display = "none";
	}
	container.style.gridTemplateColumns = "repeat(1, 1fr)";
	container.style.gridTemplateRows = "repeat(1, 1fr)";
	jobSlides[n].style.display = "grid";
	jobSlides[n].style.pointerEvents = "none"; //prevents slide from brigtening up
	for(i = 0; i < jobDescript.length; i++){
		jobDescript[i].classList.remove("hide"); //removes the class hide
	}
	back.classList.remove("hide");
}

//functions for next and previous button
let currSlide = 3;
function nextSlide(n){
	currSlide += n;
	showSlide();
}
function showSlide(){
	let i;
	//resets all job-exp each time
	for(i = 0; i < jobSlides.length; i++){
		jobSlides[i].style.display = "none";
		
		//jobSlides.length/2 for number of 4slides in 1 page used for dots
		//jobSlides.length for number of slides used for dots
	}
	for(i = 0; i < dots.length; i++){
		dots[i].classList.remove("active");
	}
	if(currSlide <= 3){
		currSlide = 3; //resets currSlide if overpressed
		dots[0].classList.add("active");
		for(i = 0; i < 4; i++){
			jobSlides[i].style.display = "grid";
		}
	}else if(currSlide > 3){
		currSlide = 7; //resets currSlide if overpressed
		dots[1].classList.add("active");
		for(i = 4; i < jobSlides.length; i++){
			jobSlides[i].style.display = "grid";
		}
	}
}
