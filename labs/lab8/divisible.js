//IS DIVISIBLE BY SEVEN

//store inputs into variables by selecting id
let numInput = document.querySelector("#numInput");
let sevenDiv = document.querySelector("#sevenDiv");

//Function that updates div (when button is pressed)
function updateDiv () {
//div's innerhtml updated based on isDivisible function returning true or false
if (isDivisible ()) {
    sevenDiv.innerHTML = "Divisible by seven!"
}
else {
    sevenDiv.innerHTML = "NOT divisible by seven!"
}

}

//Function that discerns if input is divisible by seven
function isDivisible () {
    let number = numInput.value;
    //if the modulus is 0 then it is divisible by 7
    if ( number % 7 == 0) {
        console.log("true");
        return true;
    }

    else {
        console.log("false");
        return false;
    }
}