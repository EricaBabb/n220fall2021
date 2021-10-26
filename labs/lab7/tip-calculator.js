//TIP AND TOTAL CALCULATOR

//store input into a variable by selecting its id
let numInput = document.querySelector("#numInput");

//Function to calculate the tip and total of the bill
function calcTipTotal () {
    //store the numInput value in the total variable
    let oldTotal = numInput.value;
    //calculate the tip from the total (20% of total)
    let tip = oldTotal*0.2;
    //calculate the new total
    let total = +oldTotal + +tip;
    console.log(`Tip: $${tip} Total: $${total}`);

    //Let the user know to check the console for the message

    //create a div
    let newDiv = document.createElement("div");
    //insert text into the div
    newDiv.innerHTML = "Check your console!";
    //append the div to the page
    document.body.appendChild(newDiv);
   }