//FLASHCARDS

//store divs into variables by selecting id
let ageAnswer = document.querySelector("#ageAnswer");
let fruitAnswer = document.querySelector("#fruitAnswer");
let capitalAnswer = document.querySelector("#capitalAnswer");
let answerDiv = document.querySelector("#answerDiv");
//add an event listener
ageAnswer.addEventListener("click", itsClicked);
fruitAnswer.addEventListener("click", itsClicked);
capitalAnswer.addEventListener("click", itsClicked);

//Function
function itsClicked (event) {
    let answer = event.target.getAttribute("answer");
    answerDiv.innerHTML = answer

}