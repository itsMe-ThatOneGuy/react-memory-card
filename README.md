# Don Patch Memory Card Game

I made this as part of The Odin Project [course](https://www.theodinproject.com/lessons/node-path-javascript-memory-card)

## [Live Preview](https://github.com/itsMe-ThatOneGuy/react-memory-card)

The goal of the game is to click as many of Don Patch's faces as you can without clicking the same one twice. Your increments by one each time you succeed at picking a card you haven't already clicked. If you click a card you had already clicked before, the score will go back to zero starting the game over.

## Getting Started

### Install and Run

```bash
git clone https://github.com/itsMe-ThatOneGuy/react-memory-card.git
cd react-memory-card
npm install
npm run start
```

## Built With

- [React](https://reactjs.org/)

## Dev Blog / Post Project Thoughts

I started the project on 03-31-2024 and completed it on 04-02-2023.
The game is functional, but there are a few things I would like to change.

1. I mostly used class components, but I would like to convert those to functinal components.

2. I want to add a difficulty selector.

- Easy mode - 4 images to choose from.
- Medium mode - 8 images to choose from.
- Hard mode - 12 images to choose from.

3. I would like to make the total number of possiable images much larger. When you have more than half images clicked already, the oldest one will be replaced with a new image. This will make the game have the possibility of lasting longer and increase the difficulty.

4. I would like to add more style to the page.

5. I think it would cool to have the images stored in a database, and then create an api to retrive them.

This project allowed me to practice using React state and props. Going into this project, I had to really think about how to handle state changes. Originally I wanted each component to have its own state, but later determined that to be a bad idea since state should flow from parent component to child. Changing my mind about the state management, I decided to house most of the sate state in the Gameboard componenet. Since I didn't want the Scoreboard component to be a child of the Gameboard componenet, I made a Game componenet to as a parent for the two; effectively lifting the scoring state for both. This then allowed me to update score in the Game component state when a Card componenet was clicked in Gameboard. Then that updated score state would flow down to the Scoreboard componenet.
I didn't like the way the Gameboard file looked having an import statement for every image. I played with the idea of importing the images dynamically as needed, but I ended up making a Carddata file to store that info instead. I imported all images int that file, and then turned them each into their own object stored in an array that was then exported. I thought this was a really cool way of implementing cleaner looking code and an interesting way to assign the components state. Reviewing the project I feel there could be a more "React" like way to handel the gameloop, but for now it works; I do hope to get back to this project to refactor it soon.
