let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

    // only set hidden fields if they are empty.
    if (!answer.value && !attempt.value) {
        setHiddenFields();
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
