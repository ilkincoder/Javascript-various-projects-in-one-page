/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses
let guesses = [];

// Variable for store the correct random number
let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  // domEvents();
};

function domEvents() {
  alert(document.body.lastElementChild.innerHTML);
}

// Functionality for playing the whole game
function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  if (numberGuess !== "") {
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
  } else {
    // TODO - show popup
    // let warning = "<span class='popuptext' id='popup'>Input the number!</span>";
    // showPopup();
  }
}

// When the user clicks on div, open the popup
function showPopup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

// Show the result for if the guess it too high, too low, or correct
function displayResult(numberGuess) {
  console.log(correctNumber);
  if (numberGuess > correctNumber) {
    showResult("warning", "Your guess is too high!");
  } else if (numberGuess < correctNumber) {
    showResult("warning", "Your guess is too low!");
  } else {
    showResult("won", "Awesome job, you got it!");
  }
}

// Initialize a new game by resetting all values and content on the page
function initGame() {
  // Reset the guess history display
  correctNumber = getRandomNumber();
  resetResultContent();
  document.getElementById("number-guess").value = "";
  guesses = [];
  displayHistory();
}

// Reset the HTML content for guess history
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

// Return a random number between 1 and 100
function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
}

// Save guess history
function saveGuessHistory(guess) {
  guesses.push(guess);
}

// Display guess history to user
function displayHistory() {
  let index = guesses.length - 1; // TODO
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list += `<li class='list-group-item'>You guessed ${guesses[index]}</li>`;
    index--;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

//Retrieve the dialog based on if the guess is wrong or correct
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

// Insert the dialog message into the HTML
function showResult(messageType, text) {
  let dialog = getDialog(messageType, text);
  document.getElementById("result").innerHTML = dialog;
}
