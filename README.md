# Abi's Game

## Overview

Simple as is sounds, this is my game, it is a numbers guessing game. this will be slowly developed on to keep the brains stimulated.

## User Stories

- **As a [type of user]**, I want to [what the user wants to achieve] so that [reason for wanting to achieve it].
- ...

## Wireframes

![Homepage Wireframe](link_to_homepage_wireframe)
![Levels Wireframe](link_to_levels_wireframe)
![Game Wireframe](link_to_game_wireframe)
...

## Technologies Used

- **HTML:** Used for structuring the web pages.
- **CSS:** Used for styling the HTML documents.
- **JavaScript:** Used for implementing interactive features and game logic.
- **GitHub:** Used for version control and deployment.
- **Gitpod/Visual Studio Code (IDE):** Used for coding and managing the project.
- ...

## Features

- **Landing page:** Introduction to the project and navigation to different sections.
- **Game Page:** Displays the math game interface for users to play.
- **Header and Footer:** Consistent navigation and branding across pages.
- ...

## Deployment

### Making a Local Clone to Create Project

1. Find the GitHub Repository.
2. Click the Code button.
3. Copy the link shown.
4. In Gitpod/Visual Studio Code, change the directory to the desired location.
5. Type `git clone`, and paste the link copied in step 3.
6. Press Enter to create the local clone.

### Updating Changes

- `git add <file>`: Add file(s) to the staging area.
- `git commit -m “commit message”`: Commit changes to the local repository.
- `git push`: Update committed code to the remote repository on GitHub.

### Deploying a GitHub Repository via GitHub Pages

1. Go to Repository Settings.
2. Scroll down to GitHub Pages section.
3. Under Source, select Main branch.
4. Click Save.
5. Wait for the site to be published at the provided link.

## Testing

- **Manual Testing:** Detailed testing process, including scenarios and outcomes. 


| Function | User Action | Outcome | Result |
|----------|-------------|---------|--------|
| Access webpage | Use this link | | Homepage with how to play | Pass |
| CSS styles for hover | Hover over links (title and play button) | The links will change colour | Pass |
| Load game | Click play button | This will open the game | Pass |
| CSS styles for hover | Hover over hint, submit, and refresh button | The buttons will change colour | Pass |
| Letter input | Type in letter to the input box | Letter displays in box | Pass |
| Submit with correct letter | Once entered letter, click submit button | If letter correct, this will show on the dotted line in the correct position | Pass |
| Submit with incorrect letter | Once entered letter, click submit button | If letter incorrect, this will disappear | Pass |
| Submit with no input | Click enter without having a letter in the input | A pop-up will show with error message to say the user needs to enter a letter | Pass |
| Submit with letter already entered | Enter a letter in the input box which has already been guessed | A pop-up error message will show to say the letter has already been entered | Pass |
| Submit on final correct guess | User will enter the last letter which is correct | A pop-up message will show to say congrats they have guessed correctly | Pass |
| Refresh | User will click the refresh button when they want a new game | New game will load clearing guesses | Pass |
| Hint | User will click on the hint option when they are stuck | A pop-up box will hover over the hint box with a clue | Pass |

- **Automated Testing:** Results from testing tools like Lighthouse, screen size responsiveness.
index.html


![index-lighthouse](docs/index-lighthouse.png)
![index-screensizes](docs/index-screen-sizes.png)


game.html


![game-lighthouse](docs/game-lighthouse.png)
![game-screensizes](docs/game-screen-sizes.png)


- **Validator Testing:** Validation results from HTML and CSS validators.
index.html

game.html

style.css

## Credits

- https://www.youtube.com/watch?v=JaC21cZnbl0
- https://www.shecodes.io/athena/4613-sticking-footer-to-the-end-of-an-html-page#:~:text=You%20can%20stick%20a%20footer,the%20footer%20in%20your%20CSS.
- https://www.w3schools.com/jsref/met_win_alert.asp
- https://www.w3schools.com/howto/howto_js_popup.asp
- https://forums.mobirise.com/discussion/30640/create-a-refresh-button-for-just-one-page

