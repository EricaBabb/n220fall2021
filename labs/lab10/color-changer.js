//COLOR CHANGER

//store divs into variables by selecting id
let sq1 = document.querySelector("#sq1");
let sq2 = document.querySelector("#sq2");
let sq3 = document.querySelector("#sq3");
//add an event listener
sq1.addEventListener("click", itsClicked);
sq2.addEventListener("click", itsClicked);
sq3.addEventListener("click", itsClicked);

//Style the squares
//margin
sq1.style.margin = "5px";
sq2.style.margin = "5px";
sq3.style.margin = "5px";
//float
sq1.style.float = "left";
sq2.style.float = "left";
sq3.style.float = "left";
//height
sq1.style.height = "200px";
sq2.style.height = "200px";
sq3.style.height = "200px";
//width
sq1.style.width = "200px";
sq2.style.width = "200px";
sq3.style.width = "200px";
//default background color
sq1.style.backgroundColor = "gray";
sq2.style.backgroundColor = "gray";
sq3.style.backgroundColor = "gray";

//function
function itsClicked (event) {
    //get attribute
    let response = event.target.getAttribute("color");
    // event.target.innerHTML = response;

    //use attribute to change background color
    event.target.style.backgroundColor = response;

}
