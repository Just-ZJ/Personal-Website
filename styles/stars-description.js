// JavaScript Document
const starsCont = document.getElementsByClassName("star-container"); /*returns an array of elements*/
const textCont = document.querySelector(".text-bubble"); /*returns just one element*/
const leftGrid = document.querySelector(".grid-col1-container");
const rightGrid = document.querySelector(".grid-col2-container");

/*since starsCont is an array, you need to add event listener to every element in the array.*/
for(let i = 0; i < starsCont.length; i++){
	starsCont[i].addEventListener("mouseenter", showDescription);
	starsCont[i].addEventListener("mouseleave", hideDescription);
}

function showDescription(){
	leftGrid.addEventListener("mouseenter", showOnRight);
	leftGrid.addEventListener("mouseleave", removePos);
	rightGrid.addEventListener("mouseenter", showOnLeft);
	rightGrid.addEventListener("mouseleave", removePos);
	
	textCont.style.display = "inline-grid";
}

function showOnRight(){
	textCont.style.right = "0";
	textCont.style.marginRight = "250px";
	textCont.style.marginTop = "75px";
}

function showOnLeft(){
	textCont.style.right = "0";
	textCont.style.marginRight = "250px";
	textCont.style.marginTop = "75px";
}

function hideDescription(){
	textCont.style.display = "none";
}

function removePos(){
	textCont.style.right = null;
	textCont.style.marginRight = null;
	textCont.style.marginTop = null;
}
