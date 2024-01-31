let colors = ['red', 'blue', 'green', 'yellow'];
let score = 0;

function startGame() {
  let randomIndex = Math.floor(Math.random() * colors.length);
  let correctColor = colors[randomIndex];
  let message = document.getElementById('message');
  message.innerHTML = '';

  document.getElementById('cards').style.pointerEvents = 'auto';

  for (let i = 1; i <= 4; i++) {
    let card = document.getElementById(`card${i}`);
    card.style.backgroundColor = colors[i - 1];
  }

  message.innerHTML = `Guess the color: ${correctColor}`;
}

function checkGuess(selectedCard) {
  let selectedColor = document.getElementById(selectedCard).style.backgroundColor;
  let correctColor = document.getElementById('message').innerHTML.split(' ').pop();

  if (selectedColor === correctColor) {
    score++;
    document.getElementById('message').innerHTML = 'Correct! Well done!';
  } else {
    document.getElementById('message').innerHTML = 'Incorrect. Try again!';
  }

  document.getElementById('score').innerHTML = `Score: ${score}`;
  document.getElementById('cards').style.pointerEvents = 'none';
}
