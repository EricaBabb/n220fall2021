//DATA DRIVEN DISPLAY

let myDrawing = {
    width: "100",
    height: "200",
    color: "#34edea",
    positionX: "100",
    positionY: "150"
}

function setup() { 
    createCanvas(400, 400);
    background(200);
  } 

  function draw() {
      fill(myDrawing.color)
      rect (myDrawing.positionX, myDrawing.positionY, myDrawing.height, myDrawing.width)
  }