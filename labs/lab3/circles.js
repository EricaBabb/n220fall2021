function setup() {
    createCanvas(400, 350);
}

function draw() {
    background(200);
    
    noFill();
  
    //
    for (var i = 0; i < 40; i++) {
      
        stroke (0);
        //When do with noFill, the largest circle--which is drawn last--will not cover the initial smaller ones. This means every circle is visible

        circle(200, 170, i*10);
    }
}