var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var rndIdx = parseInt(Math.random() * 26);
var secretLetter = alpha[rndIdx];
var numGuesses = 5;
var usersGuess = prompt("I am thinking of a letter. Can you guess it?");
 
if (secretLetter == usersGuess) {
    console.log('Congratulations you got it');
}
else {
    if (secretLetter > usersGuess) {
        console.log("Your guess comes before the secret letter");
    }
    else {
        console.log("Your guess comes after the secret letter");
    }
    numGuesses--;
}
if (secretLetter != usersGuess) {
    prompt("Guess Again (4 Left)")
}
if (secretLetter == usersGuess) {
    console.log('Congratulations you got it');
}
else {
    if (secretLetter > usersGuess) {
        console.log("Your guess comes before the secret letter");
    }
    else {
        console.log("Your guess comes after the secret letter");
    }
    numGuesses--;
}
if (secretLetter != usersGuess) {
    prompt("Guess Again (3 Left)")
}
if (secretLetter == usersGuess) {
    console.log('Congratulations you got it');
}
else {
    if (secretLetter > usersGuess) {
        console.log("Your guess comes before the secret letter");
    }
    else {
        console.log("Your guess comes after the secret letter");
    }
    numGuesses--;
}
if (secretLetter != usersGuess) {
    prompt("Guess Again (2 Left)")
}
if (secretLetter == usersGuess) {
    console.log('Congratulations you got it');
}
else {
    if (secretLetter > usersGuess) {
        console.log("Your guess comes before the secret letter");
    }
    else {
        console.log("Your guess comes after the secret letter");
    }
    numGuesses--;
}
if (secretLetter != usersGuess) {
    prompt("Guess Again (1 Left)")
}
if (secretLetter == usersGuess) {
    console.log('Congratulations you got it');
}
else {
    if (secretLetter > usersGuess) {
        console.log("Your guess comes before the secret letter");
    }
    else {
        console.log("Your guess comes after the secret letter");
    }
    numGuesses--;
}
if (secretLetter == usersGuess) {
    console.log('Congratulations you got it');
}
else {
    console.log('The Secret Letter Was');
    console.log(secretLetter);
}
