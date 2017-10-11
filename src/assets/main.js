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
  } else if (attemptCount.value == 10) {
    setMessage("You Lose! :(");
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
