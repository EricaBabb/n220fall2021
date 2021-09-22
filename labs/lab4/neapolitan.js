//array of colors; strings

let colors = [
    "#FA94C4", "#FFDDBD", "#725349"
]
//setting up our canvas
function setUp () {
    createCanvas(100, 100);
}

function draw() {
    background(300);
    //for loop
    // i is set to 0; as long as i is less than the colors array length; increment i +1
    for (var i = 0; i < colors.length; i++) {
        fill( colors[i]);
        rect(35 * i, 40, 50, 50);
    }
}