//game object

var hangmanGame = {
  //game object it should pick a random word
  //game object it should choose a new word after a win or a loss
  randomWordBank: ["lionel", "ritchie", "legend", "commodores", "solo"],

  randomWordList: [],
  //create array
  //foreach split up word into array of objects
  // {letter 'string':showMe true/false}

  splitRandom: function(getWord){
  var getWord = this.randomWordBank[Math.floor(Math.random()*this.randomWordBank.length)];
    for(var i = 0; i < getWord.length; i++){
      this.randomWordList.push({
        rLetter: getWord[i],
        guessedYet: false
      });
    }
  },

  //#############vetted and error checked to this point##################

  //resets lives
  lives: 12,

  resetLives: function () {
    this.lives = 12
  },

  gameOver: function(){
    if (this.lives === 0){
      console.log("Game Over")
    }
  },

  //gets a user guess uGuesses = [{letterGuessed:isInWord:},{}]
  userGuessList: [],

  getGuess: function(guess) {
    var guessLetter = guess;
    var indexInWord = this.randomWord.indexOf(guessLetter);

    //checks if letter has been guessed
    if (this.userGuessList.indexOf(guessLetter) === -1) {
      //validates type and length
      if (guessLetter.length === 1 && typeof guessLetter ==='string'){
        //checks if th guessed letter is in the random word
        if (indexInWord === -1) {
          this.userGuessList.push({
            letterGuessed: guessLetter,
            isInWord: false
          });
          lives -= 1;
        } else {
          this.userGuessList.push({
            letterGuessed: guessLetter,
            isInWord: true
          });
          this.randomWordList[indexInWord].guessedYet = true;
        }
      } else {
        console.log("please enter only 1 alpha character bro")
        alert("please enter only 1 alpha character bro")
      }
    } else {
      console.log("letter already used");
    }

    this.compareWords();
    this.gameOver();
  },

  //compared how many true user guesses there are to the length of the random word
  compareWords: function () {
    var totalLetters = this.randomWordList.length;
    var lettersGuessed = 0;
    this.randomWordList.forEach(function(letter){
      if (letter.guessedYet === true){
        lettersGuessed += 1;
      }
    });
    if (totalLetters === lettersGuessed){
      this.resetLives();
      console.log("you win!");
    }
  }
}

var handler {
//handler it should add <li>s to a list as the number of blanks
//handler it should edit the html in the li s to correctly guessed letters 
}

var view {
//view it should show the current guesses in order entered (go by index for now)
//view it should add li to ul object 
}


//see week 3 exercise 21 for events example