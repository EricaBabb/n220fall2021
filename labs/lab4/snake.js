//Empty array for mouse positions
let positions = [];

//canvas set up
function setup() {
  createCanvas(300, 400);
}

function draw() {
  background(220);
  //The circle where mouse is currently
  ellipse(mouseX, mouseY, 50, 50);
  
  // storing the previous 10 positions
  positions.push({x: mouseX, y: mouseY});
  
  //removing any coordinates that are not the most recent 10
  if (positions.length > 10) {
  	 positions.shift();
  }
  //positions being drawn based on mouse coordinates over time
  for (let i = 0; i < positions.length; i ++) {
  	ellipse(positions[i].x, positions[i].y, 50, 50);
  }
}