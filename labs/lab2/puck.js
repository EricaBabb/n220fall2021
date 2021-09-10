
//PUCK SIDE

//Set up 400x300 canvas
function setup() {
    createCanvas(400, 300);
    
  }
//Draw animation function
function draw () {
    background(0); 
    

    if (mouseX > 200) {
        fill(138, 18, 38);
        //Will be red once it is passed 200 (right side)
    } else {
        fill(127, 179, 235);
        //Will be blue if less than 200 (left side)
    }

    circle(mouseX, mouseY, 30);
}