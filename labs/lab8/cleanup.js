//CLEANUP

//store inputs into variables by selecting id
let strInput = document.querySelector("#strInput");
let cleanDiv = document.querySelector("#cleanDiv");

//Function to remove '#'
function cleanup () {
    let text = strInput.value;
    //replace any '#' with nothing (deleting the '#')
    let result = text.replace(/#/gi, "");
    //Display the cleaned up text in the div
    cleanDiv.innerHTML = result;
}