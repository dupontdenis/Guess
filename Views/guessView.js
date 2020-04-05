const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const guessLevel = document.querySelector('.guessLevel');

function gameOver() {
    guessSubmit.disabled = true;
}

function win() {
    guessSubmit.classList.add("win");
}

function lost() {
    guessSubmit.classList.add("lost");
}

function play(turn) {
    guessField.value = '';
    guessField.placeholder = `  ${turn} turn(s) left`;
    guessField.focus();
}

function initGuessView(max) {
    guessSubmit.disabled = false;
    guessSubmit.classList.remove("disabled");
    guessLevel.disabled = true;
    guessField.setAttribute("max", max);
    guessField.disabled = false;
}

const View = {
    guessSubmit,
    guessField,
    guessLevel,
    win,
    lost,
    play,
    gameOver,
    initGuessView,
    get level() {
        return this.guessLevel.options[this.guessLevel.selectedIndex].value;
    },
}


export { View }