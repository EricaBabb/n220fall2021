//MAKE RANDOM

//store div into variable by selecting id
let randomDiv = document.querySelector("#randomDiv");


//Create random number
function randomNum (min, max) {
    //generating a random whole number from min-max range
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomDiv.innerHTML = randomNumber;
    console.log(randomNumber);
}