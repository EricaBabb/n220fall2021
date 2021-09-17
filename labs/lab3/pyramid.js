function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(200);
    fill(255, 0, 0);
  
    //each row will increase by 1 until 3
    for (let row = 0; row <= 3; row++) {
      
        //each column in the row will produce a square
        for (let col = 0; col <= row ; col ++) {
           square(col * 50, row * 50, 50);
        }
    }
}