import { Guess } from './../Models/guessModel.js'
import { View } from './../Views/guessView.js'

function initGuess() {
    Guess.initGuess(View.level);
    console.log(` the secret number is ${Guess.secret} `)
    View.initGuessView(Guess.max);
}

function checkGuess() {
    let game_over = false;
    let userGuess = Number(View.guessField.value);

    if (userGuess === Guess.secret) {
        View.win();
        game_over = true;
    } else if (Guess.count === Guess.limit) {
        View.lost();
        game_over = true;
    } else {
        Guess.count++;
        View.play(Guess.limit - Guess.count + 1);
    }
    if (game_over) {
        View.gameOver();
    }
}

View.guessSubmit.addEventListener('click', checkGuess);
View.guessLevel.addEventListener('change', initGuess);