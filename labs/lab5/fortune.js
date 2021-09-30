//FORTUNE APPLICATION

//Creating div
let newDiv = document.createElement("div");
//Getting button by id
var Btn = document.getElementById("btn");

//Fortune cookie array
Fortunes = ["You will have a great day today!", "Today your luck is bad", "You will die a painful death", "Luck is in your favor today!"]

// function for random fortune
function fortuneRoll () {
    let randIndex = Math.floor(Math.random() * Fortunes.length);

    let randEntry = Fortunes[randIndex];

    newDiv.innerHTML = randEntry;
}

//Customize elements
newDiv.innerHTML = "Fortune here";
newDiv.style.fontSize = "30px";
newDiv.style.marginBottom = "30px";
newDiv.style.marginLeft = "30px";
Btn.style.backgroundColor = "#a88532";
Btn.innerHTML = "Fortune";
Btn.style.width = "100px";
Btn.style.height = "50px";
Btn.style.marginLeft = "30px";
Btn.style.padding = "10px";

//Append element to page
document.body.appendChild(newDiv);