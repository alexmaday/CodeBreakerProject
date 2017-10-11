let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here

  // only set hidden fields if they are empty.
  if (!answer.value && !attempt.value) {
    setHiddenFields();
  }

  if (!validateInput(input.value)) {
    return false;
  } else {
    attempt.value++;
  }

}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();

  // make sure answer is always 4 'digits' long, even padded with zeros
  // if necessary
  while (answer.length < 4) {
    answer = '0' + answer;
  }

  attempt.value = 0;
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

function getResults(input) {

  // result string example:
  /*
  <div class="row">
  <span class="col-md-6">0123</span>
  <div class="col-md-6">
    <span class="glyphicon glyphicon-remove"></span>
    <span class="glyphicon glyphicon-ok"></span>
    <span class="glyphicon glyphicon-remove"></span>
    <span class="glyphicon glyphicon-remove"></span>
  </div>
</div>
*/

  let resultString = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  let resultGlyph = '';
  let correctCounter = 0;

  for (var i = 0; i < input.length; i++) {
    if (answer.value.indexOf(input[i] != -1)) {
      resultGlyph = '<span class="glyphicon glyphicon-transfer"></span>';
      if (answer.value[i] == input[i]) {
        resultGlyph = '<span class="glyphicon glyphicon-ok"></span>';
        correctCounter++;
      }
    } else {
      resultGlyph = '<span class="glyphicon glyphicon-remove"></span>';
    }
  }

  resultString += resultGlyph + '</div></div>'
  document.getElementById('results').innerHTML += resultString;
  if (correctCounter == 4) {
    return true;
  } 
  return false;
  
}
