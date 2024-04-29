// game.js 

// Array of words to choose from 
const words = [
    "mojito",
    "martini",
    "manhattan",
    "negroni",
    "gimlet",
    "mimosa",
    "sazerac",
    "julep",
    "spritz",
    "paloma"
];

// Pick random word section
let randomIndex = Math.floor(Math.random() * words.length); 
let selectedWord = words[randomIndex]; 
console.log(selectedWord); 

// Intial display of word
let displayWord = ""; 
for (let i = 0; i < selectedWord.length; i++) { 
    displayWord += "_ "; 
} 
document.getElementById("displayWord").textContent = displayWord;




// To store the already guessed letters 
let guessedlist = []; 

// Function to check Guessed letter 
function guessLetter() { 
    let inputElement = document.getElementById("letter-input"); 

    // To check empty input 
    if (!inputElement.value) { 
        alert("Empty Input box. Please add input letter"); 
        return; 
    } 

    let letter = inputElement.value.toLowerCase(); 

    // Clear the input field 
    inputElement.value = ""; 

    // Check if the letter has already been guessed 
    if (guessedlist.includes(letter)) { 
        alert("You have already guessed that letter!"); 
        return; 
    } 

    // Add the letter to the guessed letters array 
    guessedlist.push(letter);
}