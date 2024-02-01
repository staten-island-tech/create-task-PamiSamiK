// Initialize colors array with color options
let colors = ['red', 'blue', 'green', 'yellow'];
let score = 0; // Initialize score to 0

// Define startGame function
function startGame() {
  // Generate randomIndex = random number from 0 to length of colors array - 1
  let randomIndex = Math.floor(Math.random() * colors.length);
  // Set correctColor = colors[randomIndex]
  let correctColor = colors[randomIndex];

  // Display message to prompt player for guessing correctColor
  document.getElementById('message').innerHTML = `Guess the color: ${correctColor}`;
  // Enable card selection for player
  document.getElementById('cards').style.pointerEvents = 'auto';

  // For each card in cards:
  for (let i = 1; i <= 4; i++) {
    // Assign backgroundColor to corresponding color from colors array
    let card = document.getElementById(`card${i}`);
    card.style.backgroundColor = colors[i - 1];
  }
}

// Define checkGuess function
function checkGuess(selectedCard) {
  // Set selectedColor = color of selectedCard
  let selectedColor = document.getElementById(selectedCard).style.backgroundColor;
  // Set correctColor = extracted color from message indicating correct color
  let correctColor = document.getElementById('message').innerHTML.split(' ').pop();

  // If selectedColor equals correctColor:
  if (selectedColor === correctColor) {
    // Increment score by 1
    score++;
    // Display message indicating correct guess
    document.getElementById('message').innerHTML = 'Correct! Well done!';
  } else {
    // Display message indicating incorrect guess
    document.getElementById('message').innerHTML = 'Incorrect. Try again!';
  }

  // Update score display
  document.getElementById('score').innerHTML = `Score: ${score}`;
  // Disable card selection until next round
  document.getElementById('cards').style.pointerEvents = 'none';
}
