//Chase The Ball Game

//define variables
let ballX = 300
let ballY = 300
let ballSize = 40
let score = 0
let gameLevel = "L1";

//create canvas
function setup() {
  createCanvas(400, 400);
}

//draw function
function draw() {
  background(99, 201, 126);
  //if the gameLevel is 1 then draw the levelOne function
 if(gameLevel == "L1"){
   levelOne();
 }
  if(gameLevel == "L2"){
   levelTwo();
  }
  if(gameLevel == "L3"){
   win();
  }
  
}

function levelOne(){
  fill(119, 99, 201)
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  //dist from point one (x1,y1) to point two (x2,y2)
  let distToBall = dist(ballX,ballY, mouseX,mouseY)
  if (distToBall < ballSize/2){
  ballX = random(width);
    ballY = random(height)
    score = score+1
  }
  if (score > 5){
  gameLevel="L2"
  
  }
  line(ballX,ballY, mouseX,mouseY)
  ellipse(ballX,ballY,ballSize,ballSize)
  fill(0)
  text(("Score: "+score),width/2,40)
text("Level 1", width/2,height-20)
textSize(20)
}

function levelTwo(){
  background(64,5,160)
  fill(80,10,200)
  
  let distToBall = dist(ballX,ballY, mouseX,mouseY)
  if (distToBall < ballSize/2){
  ballX = random(width);
    ballY = random(height)
    score = score+1
  }
  if (score > 10){
  gameLevel="L3"
  
  }
 
  ellipse(ballX,ballY,ballSize/2,ballSize/2)
  fill(209,207,255)
  stroke(0)
  strokeWeight(1)
  textAlign(CENTER)
  text(("Score: "+score),width/2,40)
text("Last Level ", width/2,height-20)
textSize(20)
}
function win(){
  noStroke()
background (255)
  fill(180,0,random(255))
  text("YOU WIN!",width/2,height/2)
  textSize(50)
}