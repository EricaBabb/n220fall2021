//Follow The Ball Game

//create divs for score and level text
let scoreDiv = document.createElement("div");
let levelDiv = document.createElement("div");
let winDiv = document.createElement("div");
let timeDiv = document.createElement("div");

//style divs
scoreDiv.style.marginLeft = "165px";
scoreDiv.style.marginTop = "10px";
scoreDiv.style.fontSize = "25px";

levelDiv.style.marginLeft = "165px";
levelDiv.style.marginTop = "10px";
levelDiv.style.fontSize = "25px";

winDiv.style.marginLeft = "165px";
winDiv.style.marginTop = "10px";
winDiv.style.fontSize = "50px";

timeDiv.style.marginLeft = "10px";
timeDiv.style.marginTop = "-40px";
timeDiv.style.fontSize = "25px";

scoreDiv.innerHTML = "Score";
levelDiv.innerHTML = "Level";
timeDiv.innerHTML = "Time";

//Append divs to page
document.body.appendChild(scoreDiv);
document.body.appendChild(levelDiv);
document.body.appendChild(winDiv);
document.body.appendChild(timeDiv);


//define variables
let ballX = 300;
let ballY = 300;
let ballSize = 40;
let score = 0;
let gameLevel = "L1";
let timer = 15;

//create canvas
function setup() {
  createCanvas(400, 400);
}

//draw function
function draw() {
  background(99, 201, 126);
  //if the gameLevel is X then draw the levelX function
 if(gameLevel == "L1"){
   levelOne();
 }
  if(gameLevel == "L2"){
   levelTwo();
  }
  if(gameLevel == "L3"){
    levelThree();
   }

  if(gameLevel == "L4"){
   win();
  }
  
}

//Level One
function levelOne(){
  //background color and ball color
  background(177, 201, 99);
  fill(119, 99, 201);
  //x position, y position, width, height
  ellipse(ballX,ballY,ballSize,ballSize);

  //update score and level
  scoreDiv.innerHTML = `Score: ${+score}`;
  levelDiv.innerHTML = "Level 1";

  //intialize time
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
    timeDiv.innerHTML = `Time: ${timer}`;
  }
  if (timer == 0) {
    background (255)
    scoreDiv.innerHTML = "";
    levelDiv.innerHTML = "";
    winDiv.innerHTML = "GAME OVER";
  }
  

  //dist from point one (x1,y1) to point two (x2,y2)
  let distToBall = dist(ballX,ballY, mouseX,mouseY);

  //if the mouse touches the ball, randomize coordinate for a new ball and increment the score
  //ballsize is halfed so the mouse has to touch near the center of the ball rather than the edge
  if (distToBall < ballSize/2){
  //randomize x and y coordinates
  ballX = random(0,400);
  ballY = random(0,400);
  //score = score + 1
    score++
  }
  //if the score is above 5
  if (score > 5){
  gameLevel="L2";
  }

}

//Level Two
function levelTwo(){
    background(181, 99, 201);
    fill(99, 174, 201);
    //x position, y position, width, height
  ellipse(ballX,ballY,ballSize/2,ballSize/2);

  //update score and level
  scoreDiv.innerHTML = `Score: ${+score}`;
  levelDiv.innerHTML = "Level 2";

  //intialize time
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
    timeDiv.innerHTML = `Time: ${timer}`;
  }
  if (timer == 0) {
    background (255)
    scoreDiv.innerHTML = "";
    levelDiv.innerHTML = "";
    winDiv.innerHTML = "GAME OVER";
  }

  //dist from point one (x1,y1) to point two (x2,y2)
  let distToBall = dist(ballX,ballY, mouseX,mouseY);

  //if the mouse touches the ball, randomize coordinate for a new ball and increment the score
  //ballsize is halfed so the mouse has to touch near the center of the ball rather than the edge
  if (distToBall < ballSize/2){
  //randomize x and y coordinates
  ballX = random(0,400);
  ballY = random(0,400);
  //score = score + 1
    score++
  }
  //if the score is above 5
  if (score > 10){
  gameLevel="L3";
  }


  }

//Level Three
function levelThree(){
  background(9, 17, 71);
  fill(42, 55, 140);
  //x position, y position, width, height
  ellipse(ballX,ballY,ballSize/3,ballSize/3);

  //update score and level
  scoreDiv.innerHTML = `Score: ${+score}`;
  levelDiv.innerHTML = "Level 3";

  //intialize time
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
    timeDiv.innerHTML = `Time: ${timer}`;
  }
  if (timer == 0) {
    background (255)
    scoreDiv.innerHTML = "";
    levelDiv.innerHTML = "";
    winDiv.innerHTML = "GAME OVER";
  }

  //dist from point one (x1,y1) to point two (x2,y2)
  let distToBall = dist(ballX,ballY, mouseX,mouseY);

  //if the mouse touches the ball, randomize coordinate for a new ball and increment the score
  //ballsize is halfed so the mouse has to touch near the center of the ball rather than the edge
  if (distToBall < ballSize/2){
  //randomize x and y coordinates
  ballX = random(0,400);
  ballY = random(0,400);
  //score = score + 1
    score++
  }
  //if the score is above 5
  if (score > 15){
  gameLevel="L4";
  }

}


function win(){
  background (255)
  scoreDiv.innerHTML = "";
  levelDiv.innerHTML = "";
  winDiv.innerHTML = "YOU WIN!";
}