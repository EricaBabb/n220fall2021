const yellow = ('#f0d560')
const purple = ('#9554d1')

//COUNTER

//Set up 800x800 canvas
function setup() {
    createCanvas(800, 800);
    
  }
//Draw animation function
  function draw() {
    background(yellow);
    
    
    // Draw circle
    circle(330, 300, 400);
    fill(purple)
//console log the frameCount, which is built into p5
//frameCount displays the number of frames that have been displayed since the program began
    console.log(frameCount);

}  
