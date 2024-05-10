// jshint esversion: 6
// Categories for user to chose
const categoriesWords = {
    football: [
        "ronaldo",
        "messi",
        "neymar",
        "mbappé",
        "salah",
        "lewandowski",
        "foden",
        "rooney",
        "kane",
        "haaland"
    ],
    cocktails: [
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
    ],
    clothing: [
        "nike",
        "adidas",
        "gucci",
        "prada",
        "zara",
        "h&m",
        "primark",
        "stradivarius",
        "chanel",
        "versace"
    ],
    foods: [
        "pizza",
        "burger",
        "sushi",
        "pasta",
        "tacos",
        "pancakes",
        "ramen",
        "steak",
        "salad",
        "burrito"
    ],
    animals: [
        "lion",
        "tiger",
        "elephant",
        "giraffe",
        "cheetah",
        "wolf",
        "panda",
        "koala",
        "gorilla",
        "penguin"
    ],
    countries: [
        "usa",
        "uk",
        "france",
        "germany",
        "japan",
        "canada",
        "italy",
        "brazil",
        "australia",
        "india"
    ]
};

// Pick random word from the selected category
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category'); // category
const words = categoriesWords[category]; // new line to get the selected category
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];

console.log("Category:", category);
console.log("Words list:", words);
console.log("Selected word:", selectedWord);


// Intial display of word
let displayWord = ""; 
for (let i = 0; i < selectedWord.length; i++) { 
    displayWord += "_ "; 
} 
document.getElementById("displayWord").textContent = displayWord;


// To store the already guessed letters 
let guessedlist = []; 

document.getElementById('letter-input').addEventListener('keydown', function(event) {
if (event.key === "Enter") {
    
    guessLetter();
    
    console.log('Enter pressed');
}
});

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

    // Update the word display based on the guessed letters 
    let updatedDisplay = ""; 
    let allLettersGuessed = true; 
    for (let i = 0; i < selectedWord.length; i++) { 
        if (guessedlist.includes(selectedWord[i])) { 
            updatedDisplay += selectedWord[i] + " "; 
        } else { 
            updatedDisplay += "_ "; 
            allLettersGuessed = false; 
        } 
    } 
    document.getElementById("displayWord").textContent = updatedDisplay; 

    // Check if all letters have been guessed 
    if (allLettersGuessed) { 
        alert("Congratulations! You guessed the word correctly!"); 
    }
}

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}