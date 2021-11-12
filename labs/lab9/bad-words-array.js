//BAD WORD CATCHER (LOOPS)
 
//store input and divs into variables by selecting id
let stringInput = document.querySelector("#stringInput");
let foundDiv = document.querySelector("#foundDiv");
let tallyDiv = document.querySelector("#tallyDiv");



//Loops through array looking for bad words
function findBad () {

    let string = stringInput.value;
    let stringLower = string.toLowerCase();
//spliting the user input string into array elements on spaces
let splitString = stringLower.split (" ");

let badWords = ["clear", "water", "tires"]

var foundBadWords = splitString.filter(el => badWords.includes(el));

foundDiv.innerHTML = foundBadWords.join (", ");
tallyDiv.innerHTML = foundBadWords.length;

}

