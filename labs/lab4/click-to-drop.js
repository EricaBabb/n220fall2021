//variables for the coordinates and hasClicked is set to false
var brickX = 0;
var brickY = 0;
var hasClicked = false;

//Set up of canvas
function setup() { 
  createCanvas(400, 400);
  background(200);
} 
//when mouse is pressed, the coordinates are equal to wherever the mouse is located on the canvas; hasClicked is set to true when the mouse is pressed
function mousePressed() {
    brickX = mouseX;
    brickY = mouseY;
    hasClicked = true;
}

//if hasClicked is true, which is when the mouse is pressed, then the rectangle with the mouse coordinate will be drawn
//The y coordinate will fall at a speed of 5
function draw() { 
background(200);
  if (hasClicked) {
	fill(255, 0, 0);
	rect(brickX, brickY, 60, 30);
  }
  brickY+=5;
}

