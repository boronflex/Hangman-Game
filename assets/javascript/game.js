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

  //lives
  lives: 12,

  //gets a user guess uGuesses = [{letterGuessed:isInWord:},{}]
  userGuessList: [],

  getGuess: function(guess) {
    var guessLetter = String(guess);
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
            console.log("right");
            letter.guessedYet = true;
            i += 1;
            this.userGuessList.push({
              letterGuessed: guessLetter,
              isInWord: true
            });
          }
        });

        if (i === 0) {
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

  },

  //compared how many true user guesses there are to the length of the random word
  compareWords: function () {
    var totalLetters = this.randomWordList.length;
    var lettersGuessed = 0;

    if (this.lives === 0){
      console.log("Game Over")
    } else {
      this.randomWordList.forEach(function(letter){
        if (letter.guessedYet === true){
          lettersGuessed += 1;
        }
      });
      if (totalLetters === lettersGuessed){
        this.lives = 12;
        console.log("you win!");
      }
    }
  },
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