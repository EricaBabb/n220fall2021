//LIST DISPLAY

//collection of games
let myGames = [
    {system: "Switch", name: "Breath of the Wild", hours: "250"},
    {system: "Switch", name: "Splatoon", hours: "300"},
    {system: "Xbox", name: "Celeste", hours: "25"},
    {system: "Xbox", name: "Outlast 2", hours: "15"}
]

//loop through the array of objects
for (let i = 0; i < myGames.length; i++) {
    //div created for each object
    let gameDiv = document.createElement("div");

    //define name, system, and hours
    let name = myGames[i].name;
    let system = myGames[i].system;
    let hours = myGames[i].hours;

    //display object properties in div
    gameDiv.innerHTML = `<h2>${name}</h2> <h4>${system}</h4><h4>${hours}</h4>`;

    //if the game's system is Xbox, then set the color to green
    if (system == "Xbox") {
        gameDiv.style.color = "#a9c763"
    }
    //if it is not Xbox then set the color to purple
    else {
        gameDiv.style.color = "#9554d1"
    }

    //div is appended to the page
    document.body.appendChild(gameDiv);
}


