
         var pickword = function () {
            var words = ["monkey" , "pancake" , "javascript" , "amazing"];
            console.log(words[Math.floor(Math.random() * words.length)]);
        };
        var word = pickWord();
        var answerArray = setupAnswerArray(word);
        var remainingLetters = word.length;
        while (remainingLetters > 0) {
            showPlayerProgress(answerArray);
            var guess = getGuess();
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("Please enter a single letter.");
            } else {
                var correctGuesses = updateGameState(guess, word, answerArray);
                remainingLetters -= correctGuesses;
            }
        }
        showAnswerAndCongratulatePlayer(answerArray);

       
       // var setupAnswerArray = function (word) {

          //  for (var i = 0; i < word.length; i++) {
               // word[i] = "_";
                //return word

           // }// Return the answer array

       // };
   