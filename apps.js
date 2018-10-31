/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// Ui Elements
const msg = document.querySelector('.msg'),
      game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input');

//Assign UI min and max
minNum.textContent = min; 
maxNum.textContent = max; 

  // Play Again Event
game.addEventListener('mousedown', function(ian) {
    if (ian.target.className === 'button-primary play-again') {
      window.location.reload();
    }
});

//Listen for guess
guessBtn.addEventListener('click', function(){
  let guess =parseInt(guessInput.value);
  // console.log(guess)
  // Validate
 
  // Check if won
    if (guess === winningNum) {
     gameOver(true,`${winningNum} is Correct, You Win Mother Fucker!!!`);
        } else if (isNaN(guess) || guess < min || guess > max)  {
            setMsg(`Please enter a number between ${min} and ${max}`, 'red' );
        } else {
    // Wrong Number 
    guessesLeft -= 1;
    if (guessesLeft === 0){
      //Game Over - Lost Msg
      gameOver(false, `GAME OVER , You Lost! The Correct Number Was ${winningNum}`);
      // Disable input
      guessInput.disabled = true;
    } else { //  Game continues - answer wrong 
      // Clear input value
      guessInput.value = '';
      //Tell User its the wrong Num
      setMsg(`${guess} is not correct,  ${guessesLeft} guesses left`, 'red' );
    }  
    }
    
});

//Game Over
function gameOver(won, Msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disable = true;
  // guessBtn.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  msg.style.color = color
  //Set msg 
  setMsg(Msg);
  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += ' play-again';
}

// Get Winning Number
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set Msg
function setMsg(Msg, color) {
  msg.style.color = color
  msg.textContent = Msg;
}