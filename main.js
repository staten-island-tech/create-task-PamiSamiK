// arrayyy
let colors = ['red', 'blue', 'green', 'yellow'];
let score = 0; //set score to 0


function startGame() {
  // Generate randomIndex = random number from 0 to length of colors array - 1
  let randomIndex = Math.floor(Math.random() * colors.length);
  // Set correctColor = colors[randomIndex]
  let correctColor = colors[randomIndex];

  //  guessing right color
  document.getElementById('message').innerHTML = `Guess the color: ${correctColor}`;
  // card selection
  document.getElementById('cards').style.pointerEvents = 'auto';

  
  for (let i = 1; i <= 4; i++) {
    //set card colors
    let card = document.getElementById(`card${i}`);
    card.style.backgroundColor = colors[i - 1];
  }
}

function checkGuess(selectedCard) {
  
  let selectedColor = document.getElementById(selectedCard).style.backgroundColor;
  let correctColor = document.getElementById('message').innerHTML.split(' ').pop();

  
  if (selectedColor === correctColor) {
    //add score
    score++;
    // show correct guesss
    document.getElementById('message').innerHTML = 'Correct! Well done!';
  } else {
    // sho incorrect guess
    document.getElementById('message').innerHTML = 'Incorrect. Try again!';
  }

  // Update score 
  document.getElementById('score').innerHTML = `Score: ${score}`;
  // make the game sop til next round
  document.getElementById('cards').style.pointerEvents = 'none';
}
