// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const ball1Container = document.getElementById('ball1-container');
const ball2Container = document.getElementById('ball2-container');
const ball3Container = document.getElementById('ball3-container');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

const ballLocations = ['ball1', 'ball2', 'ball3'];

let correctGuesses = 0;
let totalGuesses = 0;

buttonOne.addEventListener('click', () => {
    const ballSpot = Math.floor(Math.random() * 3);
    const answer = ballLocations[ballSpot];
    handleGuess(answer, 'ball1');
});

buttonTwo.addEventListener('click', () => {
    const ballSpot = Math.floor(Math.random() * 3);
    const answer = ballLocations[ballSpot];
    handleGuess(answer, 'ball2');
});

buttonThree.addEventListener('click', () => {
    const ballSpot = Math.floor(Math.random() * 3);
    const answer = ballLocations[ballSpot];
    handleGuess(answer, 'ball3');
});

function handleGuess(correctSpot, userGuesses) {
  
}







// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
