

//Creating elements
let newDiv = document.createElement("div");
let nameDiv = document.createElement("div");
let energyDiv = document.createElement("div");
let happinessDiv = document.createElement("div");


//Pet array of objects
let myPet = 
    {name: "Tiny",
    energy: 50,
    happiness: 70,
    age: 4}


//Styling elements
nameDiv.innerHTML = myPet.name;
nameDiv.style.fontSize = "30px";

energyDiv.innerHTML = myPet.energy;
energyDiv.style.fontSize = "20px";

happinessDiv.innerHTML = myPet.happiness;
happinessDiv.style.fontSize = "20px";

newDiv.style.marginLeft = "1000 px";


newDiv.appendChild(nameDiv);
newDiv.appendChild(energyDiv);
newDiv.appendChild(happinessDiv);

//Feeding pet function
function feedPet() {
    //Increases pet's energy by 5 when fed
    myPet.energy += 5;
    console.log(myPet.energy);
    //refreshing results for innerHTML
    energyDiv.innerHTML = myPet.energy;
}


//Playing pet function
function playPet() {
    //Increases happiness by 5 when played with
    myPet.happiness = myPet.happiness +5;
    console.log(myPet.happiness);
    //refreshing results for innerHTML
    happinessDiv.innerHTML = myPet.happiness;
}



//Append div to page
document.body.appendChild(newDiv);