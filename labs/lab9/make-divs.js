//MAKE DIVS

function createDiv () {
    let objects = [

        { color: "#FF0000", height: 100, width: 300 },
       
        { color: "#FFFF00", height: 200, width: 200 },
       
        { color: "#ff0000", height: 300, width: 100 },
       
       ];
    
    for (i = 0; i < objects.length; i++) {
        let Div = document.createElement("div");
        Div.style.backgroundColor = objects[i].color;
        Div.style.height = objects[i].height + "px";
        Div.style.width = objects[i].width + "px";
        document.body.appendChild(Div);
    }
}


