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

// Displays the new word.
displayWord = () => {
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

displayWord();
