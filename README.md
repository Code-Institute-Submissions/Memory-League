# League of Memory

League of Memory is a League of Legends themed memory game for (currently) 1 player.
League of Memory consists of three levels with each one getting a bit more difficult.
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to play a memory game and have a fun experience.

My wireframes created as part of the design process are made in balsamiq and can be found in the wireframes directory located in this project. 

## Features


 
### Existing Features
- navigation menu allows the user to choose between 3 different levels. 
- Level one (easy) consists of 12 memory cards (6 pairs) match all the cards to complete the level.
- Level one (medium) consists of 18 memory cards (9 pairs) match all the cards to complete the level.
- Level three (hard) consists of 24 memory cards (12 pairs) match all the cards to complete the level.
- On each level there is a reset button present which allows the user to reset the level to play again.

### Features Left to Implement
- a score system indicating how well you performed (amount of turns it takes to complete the level)
- a timer used to keep track of how long it takes the player to complete the level
- display message when the user completed the level
- sound queues when the player finds a match or fails to get a match. 
## Technologies Used

- HTML

- CSS3

- [Bootstrap4](https://getbootstrap.com/)
    - The project uses **Bootstrap4** for the navigation bar, grid system, and responsiveness.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** for the different font styles used across this project
- Javascript
    - The project uses **Javascript** for the card matching logic. 
       


## Testing

- [W3C Markup Validation Service](https://validator.w3.org/#validate_by_uri)
    - The project uses **W3C Markup Validation Service** for debugging/validating the HTML markup.
- [Jigsaw](https://jigsaw.w3.org/css-validator/)
    - The project uses **Jigsaw** for debugging/validating the CSS
- I have tested the responsiveness for different screen sizes/devices using the google chrome developer tools in the google chrome browser (Version 80.0.3987.149)

### Manual testing features

- user is able to navigate through the side using the different menu buttons on the navigation bar, each leading to the respective level.
- User is able to use the back/forward buttons in the browser to go back a page or forward
- User is able to see all content on desktop and other different screens sizes.
- User is able to flip the cards by clicking/touching them.
- User is not able to click on more then 2 cards when it is not a match and has to wait before the cards are flipped back over.
- 


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
3. On GitHub go to the repository settings and scroll down to the GitHub pages section.
4. Select the source (master-branch).

[Link to deployed version](https://kris965.github.io/league-of-memory/)