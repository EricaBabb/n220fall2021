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

//array of bad words
let badWords = ["clear", "water", "tires"]

//filter the splitString for bad words
var foundBadWords = splitString.filter(el => badWords.includes(el));

//join the filtered bad words with a comma and space
foundDiv.innerHTML = foundBadWords.join (", ");
tallyDiv.innerHTML = foundBadWords.length;

}

