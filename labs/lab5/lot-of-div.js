//Write a loop that puts 100 square divs (20px x 20px) on the page, each with a different background color. Set their float CSS attribute to left.

// THAT'S A LOT OF DIVS

// i starts at zero and increments by 1 until 100
for (i = 0; i < 101; i++) {
//Div element is created
let newDiv = document.createElement("div");

//Div is styled 20px by 20px and float left
newDiv.style.width = "20px";
newDiv.style.height = "20px";
newDiv.style.float = "left";

//(16777215 == ffffff in decimal)
var randomColor = Math.floor(Math.random()*16777215).toString(16);

//Div is styled with a randomized background color using randomMath
newDiv.style.backgroundColor = "#" + randomColor;

//Append element to page
document.body.appendChild(newDiv);

}