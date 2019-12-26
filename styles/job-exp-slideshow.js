// JavaScript Document - always add js to end of body, not before
let slides = document.getElementsByClassName("job-exp-slide");
let currSlide = 1;

function nextSlide(n){
	currSlide += n;
	showSlide(currSlide);
}

function showSlide(n){
	let slideNumLeft;
	let slideNumRight;
	let i;
	/*resets all job-exp & border-radius each time*/
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		document.getElementById("slide" + (i + 1)).style.borderRadius = "0px";
	}
	
	/*checks for out of range*/
	if(n >= 7){
		currSlide = 1;
		slides[0].style.display = "block";
		document.getElementById("slide1").style.borderTopLeftRadius = "15px";
		document.getElementById("slide1").style.borderBottomLeftRadius = "15px";
		slides[1].style.display = "block";
		document.getElementById("slide2").style.borderTopRightRadius = "15px";
		document.getElementById("slide2").style.borderBottomRightRadius = "15px";
	}else if(n === 6){
		currSlide = 0;
		slides[5].style.display = "block";
		document.getElementById("slide6").style.borderTopLeftRadius = "15px";
		document.getElementById("slide6").style.borderBottomLefttRadius = "15px";
		slides[6].style.display = "block";
		document.getElementById("slide7").style.borderTopRightRadius = "15px";
		document.getElementById("slide7").style.borderBottomRightRadius = "15px";
	}else if(n <= 0){
		currSlide = 6;
		slides[5].style.display = "block";
		document.getElementById("slide6").style.borderTopLeftRadius = "15px";
		document.getElementById("slide6").style.borderBottomLeftRadius = "15px";
		slides[6].style.display = "block";
		document.getElementById("slide7").style.borderTopRightRadius = "15px";
		document.getElementById("slide7").style.borderBottomRightRadius = "15px";
	}else{
		/*displays if not out of range*/
		slides[currSlide].style.display = "block";
		slideNumLeft = "slide" + currSlide;
		document.getElementById(slideNumLeft).style.borderTopLeftRadius = "15px";
		document.getElementById(slideNumLeft).style.borderBottomLeftRadius = "15px";
		
		slides[currSlide-1].style.display = "block";
		slideNumRight = "slide" + (currSlide + 1);
		document.getElementById(slideNumRight).style.borderTopRightRadius = "15px";
		document.getElementById(slideNumRight).style.borderBottomRightRadius = "15px";
	}
}






