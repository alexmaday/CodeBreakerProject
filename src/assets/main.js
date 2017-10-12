let answer = document.getElementById('answer');
let attemptCount = document.getElementById('attempt');

function guess() {
  let userGuess = document.getElementById('user-guess');
  //add functionality to guess function here

  // only set hidden fields if they are empty.
  if (!answer.value && !attemptCount.value) {
    setHiddenFields();
  }

  if (!validateInput(userGuess.value)) {
    return false;
  } else {
    attemptCount.value = (Number(attemptCount.value) + 1).toString();
  }

  if (getResults(userGuess.value) == true) {
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
  } else if (attemptCount.value >= 10) {
      setMessage("You Lose! :(");
      showReplay();
  } else {
      setMessage("Incorrect, try again.");
  }
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  
  // make sure answer is always 4 'digits' long, even padded with zeros
  // if necessary
  while (answer.value.length < 4) {
    answer.value = '0' + answer.value;
  }
  attemptCount.value = 0;
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(val) {
  if (val.length == 4) {
    return true;
  }
  setMessage("Guesses must be exactly 4 characters long.");
  return false;
}

function getResults(userGuess) {
  /** result string example:
   *
   * <div class="row">
   * <span class="col-md-6">0123</span>
   * <div class="col-md-6">
   *   <span class="glyphicon glyphicon-remove"></span>
   *   <span class="glyphicon glyphicon-ok"></span>
   *   <span class="glyphicon glyphicon-remove"></span>
   *   <span class="glyphicon glyphicon-remove"></span>
   * </div>
   * </div>
   */

  let resultString = '<div class="row"><span class="col-md-6">' + userGuess + '</span><div class="col-md-6">';
  let resultGlyph = '';
  let correctCounter = 0;

  for (var i = 0; i < userGuess.length; i++) {
    if (answer.value.indexOf(userGuess[i]) != -1) {   // one of the numbers in the code exists. But where? ...
      resultGlyph = '<span class="glyphicon glyphicon-transfer"></span>';
      if (answer.value[i] == userGuess[i]) {
        resultGlyph = '<span class="glyphicon glyphicon-ok"></span>';
        correctCounter++;
      }
    } else {
      resultGlyph = '<span class="glyphicon glyphicon-remove"></span>';
    }
    resultString += resultGlyph;
  }

  resultString += '</div></div>';
  document.getElementById('results').innerHTML += resultString;
  if (correctCounter == 4) {
    /** win detected */
    return true;
  } 
  // keep trying
  return false;
  
}

/**
 * Create a function showAnswer that has one parameter. This function 
 * should set the innerHTML of the code label to the value of the 
 * answer hidden input. In addition to this it should take the parameter 
 * as a true or false (indicating if the player won or lost) if the 
 * parameter is true add success to code's className otherwise it should 
 * add failure. (note the space before success and failure)
 */
function showAnswer(gameWon) {

  var codeLabel = document.getElementById('code');
  codeLabel.innerHTML = '<strong>' + answer.value + '</strong>';
  if (gameWon) {
    // add success class to code label
    codeLabel.classList.add('success');
  } else {
    // add lost failure class
    codeLabel.classList.add('failure');
  }
}

/**
 * showReplay takes no parameters. This function will
 * change the style.display of guessing-div to none and the 
 * style.display of the replay-div  to block making it so the user 
 * can start over after they win or lose the game.
 */
function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}

/**
 * When a player wins in addition to setMessage call, they should 
 * also call showAnswer passing true for it's parameter, and finally 
 * make a call to showReplay. When the player loses they should call 
 * showAnswer with false for the parameter and then showReplay
 */

