
let colors = ['red', 'blue', 'green', 'yellow'];
let score = 0;
let correctColor;


function STARTGame() {
    startNewRound();
}


function startNewRound() {
  
    displayMessage('Guess the color!');
    
   
    CardSelection();

    
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = colors[i];
    }
    let randomIndex = getRandomIndex(colors.length);
    correctColor = colors[randomIndex];
}


function checkGuess(selectedColor) {
    if (selectedColor === correctColor) {
        
        score++;
        displayMessage('Correct! Well done!');
    } else {
        displayMessage('Incorrect. Try again!');
    }

    
    updateScore();

    
    stopCardSelection();
}


function displayMessage(message) {
    document.getElementById('message').innerHTML = message;
}


function updateScore() {
    document.getElementById('score').innerHTML = `Score: ${score}`;
}


function CardSelection() {
    document.getElementById('cards').style.pointerEvents = 'auto';
}


function stopCardSelection() {
    document.getElementById('cards').style.pointerEvents = 'none';
}


function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}


function CardClick(cardId) {
    let selectedColor = document.getElementById(cardId).style.backgroundColor;
    checkGuess(selectedColor);
}


document.getElementById('startButton').addEventListener('click', startNewRound);


STARTGame();
