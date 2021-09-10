const green = ('#a9c763')
//EVER LARGER, UNTIL NOT


//variables for circle diameter, growth rate, and boolean for growing  
let diam = 0;
let growth = 1;
let shouldGrow = true;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(green);
  noFill();
  stroke(255);
  strokeWeight(8);
  //variable for diameter to simulate growing and shrinking
  circle(200, 200, diam);

  //evaluating when the boolean for growin should be true and false
  if (diam > 200) {
    shouldGrow = false
  }
  if (diam < 0) {
    shouldGrow = true
  }
  
  //if else statement with condition of boolean
  if (shouldGrow == true) {
      //diameter grows by 1 if boolean is true/ is less than 0
    diam += growth;
  } else {
      //the diameter shrinks by 1 if the boolean is false/ more than 200
    diam -= growth;
  }

}


