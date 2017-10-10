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
        attempt++;
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
