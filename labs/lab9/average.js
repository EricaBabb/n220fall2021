//IT'S JUST AVERAGE

//store input and divs into variables by selecting id
let numInput = document.querySelector("#numInput");
let avgDiv = document.querySelector("#avgDiv");
let sumDiv = document.querySelector("#sumDiv");


let sum = 0;
let avg = 0;

//Function for sum and average of numbers
function sumAvg () {

    let inputNumbers = numInput.value;

    //Split numbers list into array on each comma
    //.map goes over each array element; Number converts each array string into a number
    let splitNumbers = inputNumbers.split (",").map(Number);

    // OR:
    //Each element in the array is the parameter item;  each item of the array is converted into an integer by parseInt
    // let splitNumbers = inputNumbers.split (",").map(function(item) {
    //     return parseInt(item, 10);
    // });

    console.log(splitNumbers); // [1, 2, 3, 4]


    //loop over the numbers array and add each to get sum
    for(let i = 0; i < splitNumbers.length; i++) {
        sum += splitNumbers[i];
    
    }
    console.log(sum);

    //divide the sum by the length of the numbers array
    let avg = sum / splitNumbers.length;
    console.log(avg);

    //Display the sum and average of the number array
    avgDiv.innerHTML = ` The average is ${avg}`
    sumDiv.innerHTML = `The sum is ${sum}`
    
    //Remove text from input
    numInput.value = " ";
}


