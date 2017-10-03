//game object
//functions:
//it should reset guesses to a fixed number

var lives = 12;

function resetLives() {
  lives = 12
}

//it should pick a random word
//it should choose a new word after a win or a loss

var rando = 'illgettoit'

//it should take user letter guesses and save them
var uGuessesRaw = [];
var uGuesses = [];

function getGuess(guess) {
	var guessLetter = guess;
	var indexInWord = 0;
	if (uGuesses.indexOf(guessLetter) === -1) {
	  if (guessLetter.length === 1 && typeof guessLetter ==='string'){
	    indexInWord = rando.indexOf(guessLetter);
	    uGuessesRaw.push(guessLetter);
	    uGuesses.splice(indexInWord, 0, guessLetter);
	    //problem here is the letters need to be in the order the user put in
	    //we'll need another list, storing redundant data not best practice but
	    //will prob get job done
		  console.log(guessLetter);
	  } else {
	    console.log("please enter only 1 alpha character bro")
	  }
	} else {
	  console.log("letter already used");
	}
}
//it should show the current guesses in order entered

function displayGuesses() {
  console.log(uGuessesRaw);
}

//it should if the guess is correct the letter should be revealed in hidden word



//this should be part of validating the letter but it doesnt completely belong-revisit later
//this might be unecessary is wordVerify below covers this role
function searchWord(guess) {
  var findIt = guess;
  if (rando.indexOf(findIt) === -1){
    lives -= 1;
  } else {
    console.log("success the letter is in the word");
  }
}

function wordVerify(){
  var combinedWord = '';
  for (var i = 0; i < uGuesses.length; i += 1) {
    combinedWord = combinedWord + uGuesses[i];
  }
  if (combinedWord === rando){
    resetLives();
    console.log("you win!");
  }else{
    lives -=1;
  }
}

//it should if the guess is incorrect lose a guess (see above)

//it should verify status win/loss/continue
//it souold verify the array against the word

//might be redundant given above
function winLoss() {
  if (lives < 1) {
    console.log("you lose");
    resetLives();
  } else if (lives > 1) {
    console.log("continue");
  }
}
//it should start new game after win loss




//see week 3 exercise 21 for events example