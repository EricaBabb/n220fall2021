//PASSWORD PROTECTED

//store inputs into variables by selecting id
let userInput = document.querySelector("#userInput");
let passInput = document.querySelector("#passInput");

//create a div for message outside of the function
let newDiv = document.createElement("div");
//append the div to the page
document.body.appendChild(newDiv);

//verify the login inputs
function verifyLogin() {

    //variables for the input values
    let username = userInput.value;
    let password = passInput.value;

    //checking if input values match exact string
    if ( (username == "Username") && (password == "Password")) {
    //insert success msg into the div if the username and password are correct
    newDiv.innerHTML = "Success!";
    }
    else {
    //insert error msg into the div if the username and password are incorrect
    newDiv.innerHTML = "Wrong information!";
    }

}