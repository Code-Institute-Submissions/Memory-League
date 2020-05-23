# Memory League

League of Memory is a League of Legends themed memory game for (currently) 1 player.
League of Memory consists of three levels with each level getting a bit more difficult.

## UX

- As a user, I want to play a memory game for fun.

My wireframes created as part of the design process are made in balsamiq and can be found in the wireframes directory located in this project. or by clicking [here](./wireframes/wireframe.pdf) (use ctr left-click)

## Features

### Existing Features

- navigation menu allows the user to choose between 3 different levels.
- Level one (easy): memory game consisting of 12 memory cards (6 pairs) match all the cards to complete the level.
- Level one (medium): memory game consisting of 18 memory cards (9 pairs) match all the cards to complete the level.
- Level three (hard): memory game consisting of 24 memory cards (12 pairs) match all the cards to complete the level.

### Features Left to Implement

- a score system indicating how well you performed (amount of turns it takes to complete the level)
- a timer used to keep track of how long it takes the player to complete the level
- a display message when the user completed the level
- an audio cue when the player finds a match or fails to get a match.

## Technologies Used

- HTML

- CSS3

- [Bootstrap4](https://getbootstrap.com/)
  - The project uses **Bootstrap4** for the navigation bar, grid system, and responsiveness.
- Javascript
  - The project uses **Javascript** for the card matching logic, locking the board when not a match and shuffling the cards in a random order.

## Testing

- [W3C Markup Validation Service](https://validator.w3.org/#validate_by_uri)
  - The project uses **W3C Markup Validation Service** for debugging/validating the HTML markup.
- [Jigsaw](https://jigsaw.w3.org/css-validator/)
  - The project uses **Jigsaw** for debugging/validating the CSS
- [Esprima](https://esprima.org/demo/validate.html)
  - The project uses **Esprima Syntax Validator** for validating the Javascript syntax.
- [Google Chrome Developer Tools](https://www.google.nl/intl/nl/chrome/) 
  - During this project I have tested the responsiveness for different screen sizes/devices using the **google chrome developer tools** in the google chrome browser 84.0.4147.10 (Platform version: 13099.7.0)

### Manual testing features

- user is able to navigate through the site using the different menu buttons on the navigation bar, each leading to the respective level.
- User is able to use the back/forward buttons in the browser to go back a page or forward
- User is able to see all content on desktop and smaller screens sizes.
- User is able to flip the cards by clicking them on desktop and touching them on mobile devices.
- User is not able to continue clicking the cards when the cards don't match until they flip back around.

### Run code locally

1. Open the terminal, or open a new terminal using the terminal tab (Terminal > New Terminal).
2. Enter: "python3 -m http.server" in the terminal to open port 8000.
3. When it is done loading, click on the "Open Ports" tab in the Terminal.
4. Look for port 8000. Then click on "Open browser" to view the website in a new browser tab
5. Alternatively when on the desired file click on "Open Preview" at the top right of the editor to view the content in this workspace.

## Deployment process

GitHub Pages is used for the deployement of this project following this process.

1. Create new repository on GitHub.
2. Use the "git add ." command to add the changes in the working directory to the staging area.
3. Use the "git commit -m" command to save your changes to the local repository.
4. Use the "git push" command to transfer commits from the local repository to the remote repository.
5. On GitHub go to the repository settings and scroll down to the GitHub pages section.
6. Select the source (master-branch).

[Link to deployed version](https://kris965.github.io/Memory-League/)

## Credits

- For the memory game I took inspiration from [FreeCodeCamp](https://www.freecodecamp.org).
- I used [freeformatter](https://www.freeformatter.com/) to format/beautify my html and css code.

### Content

- The font used for the navigation items belong Riot Games©

### Media

- All images used in this project belong to Riot Games©

### Acknowledgements

- Thanks to my mentor for the feedback.
