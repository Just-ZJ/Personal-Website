// JavaScript Document
let slides = document.getElementsByClassName("job-exp-slide");
let currSlide = 1;

function nextSlide(n){
	"use strict";
	/*hides all job-exp each time*/
	
	let i;
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	currSlide += n;
	console.log(currSlide);
	showSlide(currSlide);
}

function showSlide(n){
	"use strict";
	let totalSlides = slides.length;
	let slideNum;
	
	/*checks for out of range*/
	if(n >= 7){
		currSlide = 1;
		slides[0].style.display = "block";
		slides[1].style.display = "block";
	}else if(n === 6){
		currSlide = 0;
		slides[5].style.display = "block";
		slides[6].style.display = "block";
	}else if(n <= 0){
		currSlide = 6;
		slides[5].style.display = "block";
		slides[6].style.display = "block";
	}else{
		/*displays if not out of range*/
		slides[currSlide].style.display = "block";
		slides[currSlide-1].style.display = "block";
	}

}

