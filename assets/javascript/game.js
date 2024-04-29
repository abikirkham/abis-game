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

let randomIndex = Math.floor(Math.random() * words.length); 
let selectedWord = words[randomIndex]; 
console.log(selectedWord); 