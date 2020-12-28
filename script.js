// DOM Elements.
const wordElement = document.getElementById("word");
const incorrectGuessesElement = document.getElementById("incorrect-guesses");
const playAgainButton = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctGuesses = [];
const incorrectGuesses = [];

// Function that displays the new word.
displayWord = () => {
  // Sets the inner HTML to the selected word, which is generated randomly from the array.
  wordElement.innerHTML = `
    ${selectedWord
      // Splits the selected word into an array.
      .split("")
      // Maps through it to see if the letter guessed is included in that array; Outputs the letter if it is included, but outputs an empty string if it is not.
      .map(
        (letter) =>
          `<span class="letter"> ${
            correctGuesses.includes(letter) ? letter : ""
          }</span>`
      )
      // Joins the letters to revert them back to a string.
      .join("")}
    `;

  // Eliminates new lines from being created after each character, so that its readability is better when determining a win.
  const innerWord = wordElement.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congrats! You've won! 🎉";
    popup.style.display = "flex";
  }
};

// Function to update the array for the incorrect guesses.
updateIncorrectGuessesArray = () => {
  console.log("Successfully updated the array.");
};

// Function to show the notification upon making a guess that has already been attempted.
showNotification = () => {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
};

// Event listener for the keydown letter press.
window.addEventListener("keydown", (event) => {
  //   console.log(event.keyCode);
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    const letter = event.key;

    if (selectedWord.includes(letter)) {
      if (!correctGuesses.includes(letter)) {
        correctGuesses.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!incorrectGuesses.includes(letter)) {
        incorrectGuesses.push(letter);

        updateIncorrectGuessesArray();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();
