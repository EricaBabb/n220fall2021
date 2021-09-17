function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    //background white
    background("#FFF");
    // 25 shapes will be drawn
    for (let i = 0; i < 25; ++ i) {
        //Moving x coordinate for each shape drawn; no overlap of shapes
        let x = i*25; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            // blue square
            fill(116, 166, 212);
            square(x, 50, 25);
        }
        else if (i % 5 === 0) {
            // green square
            fill(116, 212, 153);
            square(x, 50, 25);
        }
        else if (i % 3 === 0) {
            // purple circle
            fill(147, 116, 212);
            circle(x+12, 62, 25);
        }
        else {
            // black circle
            fill(0);
            circle(x+12, 62, 25);
        }
    }
}