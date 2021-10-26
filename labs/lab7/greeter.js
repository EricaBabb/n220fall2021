//GREETER

//store input into a variable by selecting its id
let txtInput = document.querySelector("#txtInput");

//greet the user function
function greetUser () {
    //console log the message and the input's value (name of user)
    console.log(`Hello ${txtInput.value}`); 

    //Let the user know to check the console for the message

    //create a div
    let newDiv = document.createElement("div");
    //insert text into the div
    newDiv.innerHTML = "Check your console!";
    //append the div to the page
    document.body.appendChild(newDiv);
   }