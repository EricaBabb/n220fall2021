//Create a simple, JRPG battle system using two objects: one for an 'enemy' and the other for a 'player'. Each object should have properties for: attack, hp, and defense. Display both sets of stats on the document.

//Using a button, provide the ability for the player to "attack" the enemy, using this calculation: enemyHP -= playerAttack - enemyDefense. Have the enemy do the same to the player. Update the displayed HP on the page after the calculation. 

//Enemy obj
let enemy = 
    {attack: 10,
    hp: 80,
    defense: 15

}
//Player obj
let player = 
    {attack: 20,
    hp: 60,
    defense: 10

}

//Create elements
let enemyDiv = document.createElement("div");
let playerDiv = document.createElement("div");

//Style
enemyDiv.style.fontSize = "20px"
playerDiv.style.fontSize = "20px"
enemyDiv.style.color = "#db4946"
playerDiv.style.color = "#68d473"
enemyDiv.innerHTML = `<h1>Enemy</h1> <p>${enemy.attack}</p> <p>${enemy.hp}</p> <p>${enemy.defense}</p>`
playerDiv.innerHTML = `<h1>Player</h1> <p>${player.attack}</p> <p>${player.hp}</p> <p>${player.defense}</p>`

function attackPlayer () {
    player.hp -=  enemy.attack - player.defense;
    console.log (player.hp);
    playerDiv.innerHTML = `<h1>Player</h1> <p>${player.attack}</p> <p>${player.hp}</p> <p>${player.defense}</p>`
}

function attackEnemy () {
    enemy.hp -=  player.attack - enemy.defense;
    enemyDiv.innerHTML = `<h1>Enemy</h1> <p>${enemy.attack}</p> <p>${enemy.hp}</p> <p>${enemy.defense}</p>`
}


document.body.appendChild(enemyDiv);
document.body.appendChild(playerDiv);
