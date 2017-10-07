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
    this.reset();
    var getWord = this.randomWordBank[Math.floor(Math.random()*this.randomWordBank.length)];
    for(var i = 0; i < getWord.length; i++){
      this.randomWordList.push({
        rLetter: getWord[i],
        guessedYet: false
      });
    }
  },

  //#############vetted and error checked to this point##################

  //lives
  lives: 12,

  //gets a user guess uGuesses = [{letterGuessed:isInWord:},{}]
  userGuessList: [],

  getGuess: function(guess) {
    var guessLetter = guess.toLowerCase();
    //var indexInWord = this.randomWordList.indexOf(guessLetter);
    var validateInput = /[a-zA-z]/.test(guessLetter);

    i = 0;

    if (guessLetter.length === 1 && validateInput === true) {

      this.userGuessList.forEach(function(letter) {
        if(letter.letterGuessed === guessLetter){
          i = -1
          console.log(guessLetter+" has already been picked");
        }
      });

      if (i > -1){

        this.randomWordList.forEach(function(letter){
          if (letter.rLetter === guessLetter){
            letter.guessedYet = true;
            i += 1;
          }
        });

        if (i >= 1) {
          console.log("right");
          this.userGuessList.push({
            letterGuessed: guessLetter,
            isInWord: true
          });
        } else if (i === 0) {
          console.log("wrong");
          this.userGuessList.push({
            letterGuessed: guessLetter,
            isInWord: false
          });
          this.lives -= 1;
        }
      }
    } else {
      console.log("enter only 1 alpha character")
    }
    this.compareWords();
  },

  reset: function(){
    this.lives = 12;
    this.userGuessList = [];
    this.randomWordList = [];
    document.getElementById("theReward").style.visibility = "hidden";
    document.getElementById("theChaka").style.visibility = "hidden";
    document.getElementById("hiddenChakaTitle").style.visibility = "hidden";

  },

  //compared how many true user guesses there are to the length of the random word
  compareWords: function () {
    var totalLetters = this.randomWordList.length;
    var lettersGuessed = 0;

    if (this.lives === 0){
      alert("You Lose!")
      document.getElementById("theChaka").style.visibility = "visible";
      document.getElementById("hiddenChakaTitle").style.visibility = "visible";
      console.log("Game Over");
    } else {
      this.randomWordList.forEach(function(letter){
        if (letter.guessedYet === true){
          lettersGuessed += 1;
        }
      });
      if (totalLetters === lettersGuessed){
        alert("You Win!")
        document.getElementById("theReward").style.visibility = "visible";
        console.log("you win!");
      }
    }
  },
}

var handlers = {

  startGame: function() {
    hangmanGame.splitRandom();
    view.displayGuesses();
    view.resetGuesses();
  },

  getGuess: function() {
    var getUserLetterInput = document.getElementById('getUserGuess');
    hangmanGame.getGuess(getUserLetterInput.value);
    getUserLetterInput.value = '';
    view.displayGuesses();
    view.resetGuesses();
  },



}

var view = {

  displayGuesses: function() {
    var randomWordUl = document.getElementById('randomWordList');
    randomWordUl.innerHTML = '';

    //reveals letters of hidden word    
    hangmanGame.randomWordList.forEach(function(guess, position) {
      var guessLi = document.createElement('li');
      var letterInHiddenWord = '_';

      if (guess.guessedYet === true) {
        letterInHiddenWord = guess.rLetter;
      }
      
      guessLi.id = position;
      guessLi.textContent = letterInHiddenWord;
      randomWordUl.appendChild(guessLi);
    }, this);

    //shows user guesses so far
    var userGuessesUl = document.getElementById('userGuessList');
    userGuessesUl.innerHTML = '';

    hangmanGame.userGuessList.forEach(function(guess, position) {
      var userGuessLi = document.createElement('li');
      var userLetter = guess.letterGuessed + ', ';
      
      userGuessLi.id = position;
      userGuessLi.textContent = userLetter;
      userGuessesUl.appendChild(userGuessLi);
    }, this);
    //this is significant call back function cant refer to methods in the object without it
  },

  resetGuesses: function () {
    var livesCounter = document.getElementById('livesLeft');
    livesCounter.textContent = hangmanGame.lives;
  }
}


//see week 3 exercise 21 for events example