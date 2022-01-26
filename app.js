// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');


const ball1Image = document.getElementById('ballOne');
const ball2Image = document.getElementById('ballTwo');
const ball3Image = document.getElementById('ballThree');

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

function handleGuess(correctSpot, userGuess) {
    ball1Image.classList.remove('reveal');
    ball2Image.classList.remove('reveal');
    ball3Image.classList.remove('reveal');

    totalGuesses++;

    if (correctSpot === 'ball1') {
        ball1Image.classList.add('reveal');
    } else if (correctSpot === 'ball2') {
        ball2Image.classList.add('reveal');
    } else {
        ball3Image.classList.add('reveal');
    }

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}







// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
