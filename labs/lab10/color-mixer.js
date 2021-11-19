//COLOR MIXER

//store divs into variables by selecting id
var colorDiv = document.querySelector("#colorDiv");
var currentColor = document.querySelector("#currentColor");
var redBtnOne = document.querySelector("#redBtnOne");
var redBtnTwo = document.querySelector("#redBtnTwo");
var redBtnThree = document.querySelector("#redBtnThree");
var blueBtnOne = document.querySelector("#blueBtnOne");
var blueBtnTwo = document.querySelector("#blueBtnTwo");
var blueBtnThree = document.querySelector("#blueBtnThree");
var greenBtnOne = document.querySelector("#greenBtnOne");
var greenBtnTwo = document.querySelector("#greenBtnTwo");
var greenBtnThree = document.querySelector("#greenBtnThree");
var colorDiv = document.querySelector("#colorDiv");
var redVal = 0;
var blueVal = 0;
var greenVal = 0;

//add event listeners
redBtnOne.addEventListener("click", redClicked1);
redBtnTwo.addEventListener("click", redClicked5);
redBtnThree.addEventListener("click", redClicked10);
blueBtnOne.addEventListener("click", blueClicked1);
blueBtnTwo.addEventListener("click", blueClicked5);
blueBtnThree.addEventListener("click", blueClicked10);
greenBtnOne.addEventListener("click", greenClicked1);
greenBtnTwo.addEventListener("click", greenClicked5);
greenBtnThree.addEventListener("click", greenClicked10);

//Functions for color changes
function redClicked1(event) {
    let amount = event.target.getAttribute("amount");
    redVal = +redVal + +amount;
    colorChange();
  }
  
function blueClicked1(event) {
    let amount = event.target.getAttribute("amount");
    blueVal = +blueVal + +amount;
    colorChange();
}

function greenClicked1(event) {
    let amount = event.target.getAttribute("amount");
    greenVal = +greenVal + +amount;
    colorChange();
}

function redClicked5(event) {
    let amount = event.target.getAttribute("amount");
    redVal = +redVal + +amount;
    colorChange();
  }
  
function blueClicked5(event) {
    let amount = event.target.getAttribute("amount");
    blueVal = +blueVal + +amount;
    colorChange();
}

function greenClicked5(event) {
    let amount = event.target.getAttribute("amount");
    greenVal = +greenVal + +amount;
    colorChange();
}

function redClicked10(event) {
    let amount = event.target.getAttribute("amount");
    redVal = +redVal + +amount;
    colorChange();
  }
  
function blueClicked10(event) {
    let amount = event.target.getAttribute("amount");
    blueVal = +blueVal + +amount;
    colorChange();
}

function greenClicked10(event) {
    let amount = event.target.getAttribute("amount");
    greenVal = +greenVal + +amount;
    colorChange();
}
  

function colorChange() {
    color = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
    colorDiv.style.backgroundColor = color;
    currentColor.innerHTML = color;
  }