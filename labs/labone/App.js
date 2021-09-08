const yellow = ('#f0d560')
const pink = ('#db60c0')
const purple = ('#9554d1')
const green = ('#a9c763')

function setup() {
    createCanvas(800, 800);
  }

  function draw() {
    background(yellow);
    
    
    // head
    circle(330, 300, 400);
    fill(purple)
    
    //eyes
    circle(420, 240, 60)
    circle(240, 240, 60)
    //mouth
    arc(345, 420, 80, 80, HALF_PI, 0, CHORD);
    fill(pink)
  
    //nose
    triangle(300, 345, 328, 285, 356, 345);
    fill(green)
    
  }  