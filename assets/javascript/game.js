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