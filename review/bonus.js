// PERSONAL COMP

// Create a pet snake obj
let mySnake = {
    name: "Wormy",
    type: "python",
    energy: 10
}

// Display stats on page
let snakeDiv = document.createElement("div");
let snakeEnergy = document.createElement("div");

snakeDiv.innerHTML = `<h2>${mySnake.name}</h2> <h4>${mySnake.type}</h4>`
snakeEnergy.innerHTML = `<h4>${mySnake.energy}</h4>`
snakeEnergy.style.color = "#750909"

document.body.appendChild(snakeDiv);
document.body.appendChild(snakeEnergy);

// Allow user to feed snake
function feedSnake() {
    mySnake.energy += 5;
    //refreshing results for innerHTML
    snakeEnergy.innerHTML = mySnake.energy;

    // if the snake's energy is above 50 it will be green to indicate it has enough energy
if (mySnake.energy < 50) {
    snakeEnergy.style.color = "#750909"
}
else {
    snakeEnergy.style.color = "#09750d"
}

}


// Animate snake
function setup() {
    createCanvas(500, 500);
}
let positions = [];
function draw() {
    background(220);
    //filled brown color
    fill(66, 46, 6);
    // Snake animation follows mouse
    ellipse(mouseX, mouseY, 20, 20);

    // storing the previous 10 positions
  positions.push({x: mouseX, y: mouseY});
  
  //removing any coordinates that are not the most recent 10
  if (positions.length > 25) {
  	 positions.shift();
  }
  //positions being drawn based on mouse coordinates over time
  for (let i = 0; i < positions.length; i ++) {
    ellipse(positions[i].x, positions[i].y, 20, 20);
  }
}


