// Categories for user to chose
const categoriesWords = {
    football: [
        "Ronaldo",
        "Messi",
        "Neymar",
        "Mbappé",
        "Salah",
        "Lewandowski",
        "De Bruyne",
        "Van Dijk",
        "Kane",
        "Haaland"
    ],
    cocktails: [
        "Mojito",
        "Martini",
        "Manhattan",
        "Negroni",
        "Gimlet",
        "Mimosa",
        "Sazerac",
        "Julep",
        "Spritz",
        "Paloma"
    ],
    clothing: [
        "Nike",
        "Adidas",
        "Gucci",
        "Prada",
        "Zara",
        "H&M",
        "Calvin Klein",
        "Tommy Hilfiger",
        "Levi's",
        "Versace"
    ],
    foods: [
        "Pizza",
        "Burger",
        "Sushi",
        "Pasta",
        "Tacos",
        "Pancakes",
        "Ramen",
        "Steak",
        "Salad",
        "Burrito"
    ],
    animals: [
        "Lion",
        "Tiger",
        "Elephant",
        "Giraffe",
        "Cheetah",
        "Wolf",
        "Panda",
        "Koala",
        "Gorilla",
        "Penguin"
    ],
    countries: [
        "USA",
        "UK",
        "France",
        "Germany",
        "Japan",
        "Canada",
        "Italy",
        "Brazil",
        "Australia",
        "India"
    ]
};


// Pick random word from the selected category
const words = categoriesWords[category];
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