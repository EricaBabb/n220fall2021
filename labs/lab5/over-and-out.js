//Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.

// OVER AND OUT

//Div element is created
let sqDiv = document.createElement("div");

//Div is styled
//100px x 100px
sqDiv.style.width = "100px";
sqDiv.style.height = "100px";
//blue background
sqDiv.style.backgroundColor = "#074ae6";

//When mouse hovers over the sq div it turns black
sqDiv.onmouseover = function mouse () 
{sqDiv.style.backgroundColor = "#000"};

//When mouse is not hovering it return to blue
sqDiv.onmouseout = function mouse () 
{sqDiv.style.backgroundColor = "#074ae6"};

//Append to page
document.body.appendChild(sqDiv);