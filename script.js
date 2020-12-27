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
